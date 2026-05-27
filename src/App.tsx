import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

// Componentes modulares
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Hobbies from './components/Hobbies';

export interface WorkExperience {
    id: number;
    jobTitle?: string;
    company: string;
    dates: string;
    responsibilities: string[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    projectUrl?: string;
}

export interface Certification {
    id: number;
    name: string;
    issuingOrganization: string;
    credentialUrl?: string;
}

export interface UserProfile {
    id: number;
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    linkedInUrl: string;
    gitHubUrl: string;
    hardSkills: string[];
    softSkills: string[];
    experiences: WorkExperience[];
    projects: Project[];
    certifications: Certification[];
}

function App() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    // 2. INICIALIZA EL MOTOR EN EL APP
    const { i18n } = useTranslation();

    useEffect(() => {
        setLoading(true); // Activa la micro-carga al cambiar de idioma

        // =========================================================
        // 🛑 ENTORNO LOCAL
         //const baseUrl = 'http://localhost:5139/api/Profile';

        // 🟢 ENTORNO AWS PRODUCTION
        const baseUrl = 'https://d1xk37jjpjmwph.cloudfront.net/api/Profile';
        // =========================================================

        // 3. INYECTA EL IDIOMA ACTUAL EN LA URL DE LA PETICIÓN
        const apiUrl = `${baseUrl}?lang=${i18n.language}`;

        axios.get(apiUrl)
            .then(response => {
                const data = Array.isArray(response.data) ? response.data[0] : response.data;
                setProfile(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error de conexión:", err);
                setError("Error al conectar con la base de datos.");
                setLoading(false);
            });

    }, [i18n.language]); // <-- 4. CRÍTICO: El useEffect se vuelve a ejecutar cada vez que cambia el idioma
    if (loading) return (
        <div className="flex justify-center items-center h-screen bg-[#0f172a] text-white">
            <div className="text-2xl animate-pulse text-red-500 font-mono">&gt; Cargando sistema...</div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center h-screen bg-[#0f172a] text-red-500">
            <div className="text-xl font-bold font-mono">&gt; {error}_</div>
        </div>
    );

    if (!profile) return null;

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 relative selection:bg-red-500/30 selection:text-white">
            <ParticlesBackground />
            <div className="relative z-10">
                <Header data={{
                    name: profile.name,
                    title: profile.title,
                    linkedInUrl: profile.linkedInUrl,
                    gitHubUrl: profile.gitHubUrl
                }} />
                <main className="container mx-auto max-w-6xl min-h-screen">
                    <Profile />
                    {profile.experiences && profile.experiences.length > 0 && (
                        <Experience experiences={profile.experiences} />
                    )}
                    <Skills hardSkills={profile.hardSkills} softSkills={profile.softSkills} />
                    <Projects />
                    <Education certifications={profile.certifications} />
                    <Hobbies />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;