import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

// Componentes modulares
import Header from './components/Header';
import Profile from './components/Profile';
import Experience, { type WorkExperience } from './components/Experience';
import Projects, { type ProjectItem } from './components/Projects';
import Skills from './components/Skills';
import Education, { type Certification } from './components/Education';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Hobbies from './components/Hobbies';

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
    projects: ProjectItem[];
    certifications: Certification[];
}

const fallbackProfile: UserProfile = {
    id: 1,
    name: 'Axel Linares',
    title: 'Software Engineer & QA Automation Architect',
    summary: 'Ingeniero de Software con 3 años de experiencia diseñando servicios Backend robustos (.NET/C#) y construyendo arquitecturas de automatización de pruebas (QA). Especializado en el desarrollo de APIs REST, optimización avanzada de bases de datos SQL y la creación de suites automatizadas End-to-End (E2E) mediante Playwright. Orientado a garantizar la alta disponibilidad, seguridad y escalabilidad en ecosistemas ágiles y despliegues nativos en la nube (AWS).',
    email: 'axel.a.linares@gmail.com',
    phone: '+52 55 ...',
    location: 'Ciudad de México, México',
    linkedInUrl: 'https://www.linkedin.com/in/axel-alberto-linares-lorrabaquio-69a6b31b0',
    gitHubUrl: 'https://github.com/ElorichV',
    hardSkills: ['C#', '.NET 8', 'Playwright', 'SQL Server', 'AWS', 'Python', 'React', 'Clean Architecture'],
    softSkills: [
        'Liderazgo Técnico',
        'Aprendizaje Autónomo (Autodidacta)',
        'Resolución de Problemas Complejos',
        'Comunicación Técnica Efectiva',
        'Adaptabilidad Tecnológica',
        'Pensamiento Crítico y Analítico',
        'Shift-Left Testing & Cultura de Calidad',
        'Resiliencia bajo Presión'
    ],
    experiences: [],
    projects: [],
    certifications: []
};

function App() {
    const [profile, setProfile] = useState<UserProfile>(fallbackProfile);
    const { i18n } = useTranslation();

    useEffect(() => {
        // Detección automática de entorno (Localhost vs Producción Azure/AWS)
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const baseUrl = isLocal
            ? 'http://localhost:5139/api/Profile'
            : 'https://axellinares-api-chh4h8bcg0gubgaa.westus2-01.azurewebsites.net/api/Profile';

        const apiUrl = `${baseUrl}?lang=${i18n.language}`;
        const controller = new AbortController();
        let retryTimer: ReturnType<typeof setTimeout> | undefined;

        const fetchProfileWithWarmupRetry = async (attempt = 1) => {
            try {
                const response = await axios.get(apiUrl, {
                    timeout: 25000,
                    signal: controller.signal
                });
                const data = Array.isArray(response.data) ? response.data[0] : response.data;
                if (data && typeof data === 'object') {
                    setProfile(prev => ({ ...prev, ...data }));
                }
            } catch (err: unknown) {
                if (controller.signal.aborted) return;
                if (attempt < 2) {
                    retryTimer = setTimeout(() => {
                        void fetchProfileWithWarmupRetry(attempt + 1);
                    }, 2500);
                    return;
                }
                const message = err instanceof Error ? err.message : 'Unknown network error';
                console.info("Backend API en standby/offline, usando perfil local resiliente:", message);
            }
        };

        void fetchProfileWithWarmupRetry();

        return () => {
            controller.abort();
            if (retryTimer) clearTimeout(retryTimer);
        };

    }, [i18n.language]);

    return (
        <div className="min-h-screen bg-[#0a0b0e] text-slate-200 relative selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden">
            {/* Ambient Particle Matrix */}
            <ParticlesBackground />

            {/* Tactical Grid Overlay */}
            <div className="fixed inset-0 bg-[radial-gradient(#1f242e_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none z-0"></div>

            <div className="relative z-10">
                {/* Tactical Header with Sticky Navbar & Telemetry Hero */}
                <Header data={{
                    name: profile.name,
                    title: profile.title,
                    linkedInUrl: profile.linkedInUrl,
                    gitHubUrl: profile.gitHubUrl
                }} />

                {/* Main Content Sections */}
                <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
                    <Profile summary={profile.summary} />
                    <Experience experiences={profile.experiences || []} />
                    <Skills hardSkills={profile.hardSkills} softSkills={profile.softSkills} />
                    <Projects projects={profile.projects || []} />
                    <Education certifications={profile.certifications || []} />
                    <Hobbies />
                </main>

                {/* Footer with Telemetry */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
