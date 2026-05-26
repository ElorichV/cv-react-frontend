import { useState, useEffect } from 'react';
import axios from 'axios';

// Componentes modulares
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';


// --- NUEVAS INTERFACES (Mapeadas 100% a tu Backend .NET 8) ---
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

    useEffect(() => {
        // ---------------------------------------------------------
        // OPCIÓN A: MODO LOCAL (Úsala mientras programas en tu PC)
        axios.get('http://localhost:5139/api/Profile')
            // ---------------------------------------------------------

            // ---------------------------------------------------------
            // OPCIÓN B: MODO PRODUCCIÓN (Descoméntala SOLO antes de hacer 'npm run build')
            //axios.get('https://d1xk37jjpjmwph.cloudfront.net/api/Profile')
            // ---------------------------------------------------------
            .then(response => {
                const data = Array.isArray(response.data) ? response.data[0] : response.data;
                setProfile(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Error al conectar con el backend .NET");
                setLoading(false);
            });
    }, []);

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
        <div className="min-h-screen bg-[#0f172a] text-slate-300">
            <Header data={{
                name: profile.name,
                title: profile.title,
                linkedInUrl: profile.linkedInUrl,
                gitHubUrl: profile.gitHubUrl
            }} />

            <main className="container mx-auto max-w-6xl min-h-screen">
                <About about={profile.summary} />

                {profile.experiences && profile.experiences.length > 0 && (
                    <Experience experiences={profile.experiences} />
                )}

                <Skills hardSkills={profile.hardSkills} softSkills={profile.softSkills} />

                <Projects projects={profile.projects} />

                <Education certifications={profile.certifications} />
            </main>

            <Footer />
        </div>
    );
}

export default App;