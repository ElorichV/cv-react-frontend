import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            "header_system": "> Sistema en línea_",
            "header_hello": "Hola, soy",
            "header_button": "Explorar Perfil",

            "projects_section": "> Archivos_Ejecutables_",
            "projects_heading": "Casos de Estudio & Arquitectura",
            "projects_subtitle": "Sistemas distribuidos, agentes de IA ganadores de hackathons, backends empresariales en .NET y suites de automatización E2E.",
            "projects_view_code": "[ Ver_Código ] ↗",
            "projects_view_project": "[ Ver_Proyecto ] ↗",
            "projects_view_arch": "[ Ficha_Arquitectura ] ⚡",
            "projects_internal_qa": "[ Caso_Equipo_QA ] 🔒",

            "tab_all": "Todos",
            "tab_hackathons": "AI Hackathons & Agentes",
            "tab_backend": "Backend & Cloud (.NET)",
            "tab_qa": "QA Automation & DSA",

            "arch_modal_tag": "> ESPECIFICACIÓN_DE_ARQUITECTURA_",
            "arch_modal_decisions": "Decisiones Técnicas, Arquitectura & Impacto (Mid-Level)",
            "arch_modal_stack": "Stack Tecnológico & Herramientas",
            "arch_modal_close": "[ Cerrar_Expediente ]",
            "arch_modal_confidential": "Colaboración en equipo — Sin exposición de repositorios privados por confidencialidad.",

            "profile_section": "> Protocolo_Identidad_",
            "profile_heading": "Ingeniería con Propósito",
            "profile_bio": "Ingeniero de Software con 3 años de experiencia diseñando servicios Backend robustos (.NET/C#) y construyendo arquitecturas de automatización de pruebas (QA). Especializado en el desarrollo de APIs REST, optimización avanzada de bases de datos SQL y la creación de suites automatizadas End-to-End (E2E) mediante Playwright. Orientado a garantizar la alta disponibilidad, seguridad y escalabilidad en ecosistemas ágiles y despliegues nativos en la nube (AWS).",

            "pilar1_title": "Integridad",
            "pilar1_desc": "El dato es el activo más valioso. Diseño bases de datos SQL con integridad referencial absoluta y optimización de índices.",
            "pilar2_title": "Estabilidad",
            "pilar2_desc": "Si no está probado, está roto. Implemento suites de QA E2E con Playwright/Browserbase y Shift-Left Testing que eliminan regresiones.",
            "pilar3_title": "Escalabilidad",
            "pilar3_desc": "Backend diseñado para la nube. Arquitecturas Clean Architecture en .NET y orquestación de agentes listas para AWS y Render.",

            "exp_section": "> Registro_Laboral_",
            "exp_heading": "Experiencia Profesional",
            "exp_positronica_role": "Software Engineer (Co-Founder)",
            "exp_positronica_dates": "Enero 2026 - Actualidad",
            "exp_positronica_resp1": "Liderazgo técnico y desarrollo backend/full-stack en la fundación de Positronica Labs (positronicalabs.dev), definiendo la arquitectura base y la lógica de negocio para el lanzamiento inicial del producto.",
            "exp_positronica_resp2": "Implementación de Clean Architecture para el ecosistema en .NET Core, gestionando el despliegue de infraestructura escalable en la nube mediante AWS y Render.",
            "exp_positronica_resp3": "Diseño de arquitecturas de automatización E2E (Playwright / Browserbase) y orquestación de agentes de IA (n8n.cloud, Backboard.io, Firecrawl), optimizando los ciclos de despliegue.",
            "exp_positronica_link": "[ positronicalabs.dev ] ↗",

            "skills_section": "> CAPACIDADES_",
            "skills_heading": "Arsenal Técnico",
            "skills_cat_languages": "Lenguajes",
            "skills_cat_frameworks": "Frameworks & Arquitectura",
            "skills_cat_qa": "QA & Cloud Browser Automation",
            "skills_cat_cloud": "Cloud, PaaS & Herramientas",
            "skills_cat_security": "Ciberseguridad & AppSec",
            "skills_cat_ai": "IA, Agentes & Orquestación",
            "skills_cat_soft": "Competencias Profesionales",

            "edu_section": "> Base_de_Conocimiento_",
            "edu_heading": "Educación y Certificaciones",
            "edu_degree": "Licenciatura en Ingeniería en Sistemas de Software",
            "edu_institution": "UNITEC",
            "edu_status": "Último Cuatrimestre",
            "edu_academic_title": "Formación Académica",
            "edu_certs_title": "Certificaciones Internacionales",
            "edu_verify": "[ Validar_Credencial ] ↗",

            "offline_section": "> OFFLINE_MODE",
            "offline_heading": "Protocolos de Desconexión",
            "hobby_pokednd": "Proyecto Dev & Rol",
            "hobby_reading": "Fantasía & Tech",

            "contact_title": "> Iniciar_Transmisión_",
            "contact_name": "Identificación (Nombre)",
            "contact_email": "Enlace de retorno (Correo)",
            "contact_message": "Carga útil (Mensaje)",
            "contact_send": "[ Transmitir_Datos ] ↗",
            "contact_sending": "Transmitiendo...",
            "contact_success": "¡Mensaje recibido en el servidor principal!",
            "contact_error": "Error de conexión. Intente nuevamente.",
            "contact_cancel": "[ Abortar ]",
            "contact_button_text": "Contacto",
            "download_cv_text": "Descargar CV",
        }
    },
    en: {
        translation: {
            "header_system": "> System online_",
            "header_hello": "Hello, I'm",
            "header_button": "Explore Profile",

            "projects_section": "> Executable_Files_",
            "projects_heading": "Case Studies & Architecture",
            "projects_subtitle": "Distributed systems, award-winning AI hackathon agents, enterprise .NET backends, and E2E automation suites.",
            "projects_view_code": "[ View_Code ] ↗",
            "projects_view_project": "[ View_Project ] ↗",
            "projects_view_arch": "[ Architecture_Spec ] ⚡",
            "projects_internal_qa": "[ QA_Team_Case ] 🔒",

            "tab_all": "All",
            "tab_hackathons": "AI Hackathons & Agents",
            "tab_backend": "Backend & Cloud (.NET)",
            "tab_qa": "QA Automation & DSA",

            "arch_modal_tag": "> ARCHITECTURE_SPECIFICATION_",
            "arch_modal_decisions": "Technical Decisions, Architecture & Impact (Mid-Level)",
            "arch_modal_stack": "Tech Stack & Tooling",
            "arch_modal_close": "[ Close_Dossier ]",
            "arch_modal_confidential": "Team collaboration — Internal repositories are not exposed due to confidentiality.",

            "profile_section": "> Identity_Protocol_",
            "profile_heading": "Engineering with Purpose",
            "profile_bio": "Software Engineer with 3 years of experience designing robust Backend services (.NET/C#) and building test automation architectures (QA). Specialized in REST API development, advanced SQL database optimization, and the creation of automated End-to-End (E2E) suites using Playwright. Focused on ensuring high availability, security, and scalability in agile ecosystems and cloud-native deployments (AWS).",

            "pilar1_title": "Integrity",
            "pilar1_desc": "Data is the most valuable asset. I design SQL databases with absolute referential integrity and optimized indexes.",
            "pilar2_title": "Stability",
            "pilar2_desc": "If it's not tested, it's broken. I implement E2E QA suites with Playwright/Browserbase and Shift-Left testing that eliminate regressions.",
            "pilar3_title": "Scalability",
            "pilar3_desc": "Backend designed for the cloud. Clean Architecture in .NET and agentic orchestration ready for AWS and Render.",

            "exp_section": "> Work_Registry_",
            "exp_heading": "Professional Experience",
            "exp_positronica_role": "Software Engineer (Co-Founder)",
            "exp_positronica_dates": "January 2026 - Present",
            "exp_positronica_resp1": "Technical leadership and backend/full-stack development in the founding of Positronica Labs (positronicalabs.dev), defining the baseline architecture and business logic for the initial product launch.",
            "exp_positronica_resp2": "Implementation of Clean Architecture for the .NET Core ecosystem, managing scalable cloud infrastructure deployment via AWS and Render.",
            "exp_positronica_resp3": "Design of E2E automation architectures (Playwright / Browserbase) and AI agent orchestration workflows (n8n.cloud, Backboard.io, Firecrawl), optimizing deployment cycles.",
            "exp_positronica_link": "[ positronicalabs.dev ] ↗",

            "skills_section": "> CAPABILITIES_",
            "skills_heading": "Technical Arsenal",
            "skills_cat_languages": "Languages",
            "skills_cat_frameworks": "Frameworks & Architecture",
            "skills_cat_qa": "QA & Cloud Browser Automation",
            "skills_cat_cloud": "Cloud, PaaS & Tooling",
            "skills_cat_security": "Cybersecurity & AppSec",
            "skills_cat_ai": "AI, Agents & Orchestration",
            "skills_cat_soft": "Soft Skills & Competencies",

            "edu_section": "> Knowledge_Base_",
            "edu_heading": "Education & Certifications",
            "edu_degree": "Bachelor's Degree in Software Systems Engineering",
            "edu_institution": "UNITEC",
            "edu_status": "Final Term",
            "edu_academic_title": "Academic Education",
            "edu_certs_title": "International Certifications",
            "edu_verify": "[ Verify_Credential ] ↗",

            "offline_section": "> OFFLINE_MODE",
            "offline_heading": "Disconnection Protocols",
            "hobby_pokednd": "Dev Project & RPG",
            "hobby_reading": "Fantasy & Tech",

            "contact_title": "> Initialize_Transmission_",
            "contact_name": "Identification (Name)",
            "contact_email": "Return link (Email)",
            "contact_message": "Payload (Message)",
            "contact_send": "[ Transmit_Data ] ↗",
            "contact_sending": "Transmitting...",
            "contact_success": "Message received at main server!",
            "contact_error": "Connection failed. Try again.",
            "contact_cancel": "[ Abort ]",
            "contact_button_text": "Contact",
            "download_cv_text": "Download CV",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;
