import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Importaremos este archivo para los estilos

// --- 1. INTERFACES ---
// Le decimos a TypeScript cómo son los datos que vienen de nuestra API de C#
interface Link {
  id: number;
  name: string;
  url: string;
}

interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  repoUrl?: string;
  technologies: string[];
}

interface Skill {
  id: number;
  name: string;
  level: string;
  category: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  dates: string;
}

interface Certification {
  id: number;
  name: string;
  status: string;
}

interface Hobby {
  id: number;
  name: string;
  description: string;
}

// --- 2. El Modelo Principal ---
interface UserProfile {
  id: number;
  name: string;
  title: string;
  summary: string;
  links: Link[];
  experiences: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  educationHistory: Education[];
  certifications: Certification[];
  hobbies: Hobby[];
}

// --- 3. El Componente "App" ---
function App() {
  // --- ESTADO: Aquí guardaremos la información de la API ---
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- EFECTO: Este código se ejecuta 1 sola vez al cargar la página ---
  useEffect(() => {
    // Esta es la llamada a tu API de .NET
    axios.get('https://d1xk37jjpjmwph.cloudfront.net/api/Profile')
      .then(response => {
        // Si todo sale bien, guardamos los datos en el estado
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        // Si hay un error, lo guardamos en el estado
        console.error("Error al obtener el perfil:", error);
        setError("No se pudo conectar con la API. Asegúrate de que el proyecto de .NET se esté ejecutando.");
        setLoading(false);
      });
  }, []); // El array vacío [] asegura que se ejecute solo una vez

  // --- 4. RENDERIZADO CONDICIONAL ---
  // Muestra un mensaje mientras los datos cargan
  if (loading) return <div className="loading">Cargando perfil desde la API...</div>;
  
  // Muestra un mensaje si hubo un error al conectar
  if (error) return <div className="error">{error}</div>;
  
  // Muestra un error si, por alguna razón, el perfil no cargó
  if (!profile) return <div className="error">No se encontró información del perfil.</div>;

  // --- 5. RENDERIZADO PRINCIPAL (HTML/JSX) ---
  // Si todo salió bien, muestra tu portafolio
  return (
    <div className="container">
      
      <header className="hero">
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <div className="links">
          {profile.links.map(link => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section id="summary">
          <h3>Sobre Mí</h3>
          <p>{profile.summary}</p>
        </section>

        <section id="experience">
          <h3>Experiencia Laboral</h3>
          {profile.experiences.map(exp => (
            <div key={exp.id} className="card">
              <h4>{exp.jobTitle}</h4>
              <h5>{exp.company} | {exp.dates}</h5>
              <ul>
                {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section id="projects">
          <h3>Proyectos Personales</h3>
          <div className="grid">
            {profile.projects.map(proj => (
              <div key={proj.id} className="card">
                <h4>{proj.name}</h4>
                <p>{proj.description}</p>
                <p><strong>Tecnologías:</strong> {proj.technologies.join(', ')}</p>
                {proj.repoUrl && 
                  <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="repo-link">
                    Ver Código en GitHub
                  </a>}
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <h3>Habilidades Técnicas</h3>
          <div className="grid skills-grid">
            {profile.skills.map(skill => (
              <div key={skill.id} className="skill-item">
                <strong>{skill.name}</strong> ({skill.category})
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <h3>Educación y Certificaciones</h3>
          <div className="grid">
            {profile.educationHistory.map(edu => (
              <div key={edu.id} className="card">
                <h4>{edu.degree}</h4>
                <h5>{edu.institution} | {edu.dates}</h5>
              </div>
            ))}
            {profile.certifications.map(cert => (
              <div key={cert.id} className="card">
                <h4>{cert.name}</h4>
                <h5>{cert.status}</h5>
              </div>
            ))}
          </div>
        </section>

        <section id="hobbies">
          <h3>Hobbies e Intereses</h3>
          <div className="grid">
            {profile.hobbies.map(hobby => (
              <div key={hobby.id} className="card">
                <h4>{hobby.name}</h4>
                <p>{hobby.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Portafolio dinámico construido con React y .NET</p>
      </footer>

    </div>
  );
}

export default App;