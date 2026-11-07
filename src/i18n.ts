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

            "offline_section": "> OFFLINE_MODE // LORE & ORIGEN DEL DISEÑO",
            "offline_heading": "Protocolos de Desconexión & Identidad Visual",
            "offline_subtitle": "Las pasiones tácticas, literarias y de ingeniería creativa que dan origen a la estética Carmesí & Obsidiana de este portafolio.",
            "profile_lore_badge": "🛡️ UI inspirada en la heráldica de la IX Legión (WH40K) — [ Ver Origen del Diseño & Offline Mode ↓ ]",

            "hobby_wh40k_title": "WARHAMMER 40,000",
            "hobby_wh40k_sub": "IX Legión · Blood Angels",
            "hobby_wh40k_tag": "ORIGEN DEL DISEÑO UI",
            "hobby_wh40k_desc": "Apasionado del lore del Imperium y de la 9na Legión (Ángeles Sangrientos). Dentro del lore, el Primarca Sanguinius (El Gran Ángel) es nuestro 'padre' genético y espiritual como hijos de su legión.",
            "hobby_wh40k_design": "🎨 Por qué este diseño: Toda la interfaz de este portafolio (rojo sangre carmesí #DC2626 sobre armadura negra obsidiana y telemetría táctica) está inspirada directamente en la heráldica de los Blood Angels.",

            "hobby_pokednd_title": "POKE D&D",
            "hobby_pokednd": "Jugador & Creador de Plataforma RPG",
            "hobby_pokednd_tag": "LIVE APP · MOTOR D20",
            "hobby_pokednd_desc": "Jugador veterano de rol y desarrollador de la nueva plataforma web interactiva creada para automatizar fichas de personaje, tiradas de dados y combates tácticos RPG en tiempo real.",
            "hobby_pokednd_roll_btn": "Tirar D20",
            "hobby_pokednd_visit_btn": "Abrir pokedyd.online",
            "hobby_pokednd_crit": "¡20 NATURAL! Crítico digno de Sanguinius: +100% éxito en el próximo deploy 🔥",
            "hobby_pokednd_fail": "¡1! Pifia Crítica: El sistema resistió el impacto gracias a Clean Architecture 🛡️",
            "hobby_pokednd_high": "¡Tirada Épica! Precisión táctica de nivel Mid-Senior ⚡",
            "hobby_pokednd_norm": "Tirada táctica superada. Sistemas nominales.",

            "hobby_anime_title": "SCI-FI & MECHA",
            "hobby_anime_sub": "Estrategia & Superación",
            "hobby_anime_tag": "INSPIRACIÓN CYBER-TACTICAL",
            "hobby_anime_desc": "Historias de estrategia militar, cálculo tipo ajedrez e ingeniería mecha que inspiran los paneles tipo HUD y terminal de este sistema:",

            "hobby_reading_title": "LECTURA TECH & SCI-FI",
            "hobby_reading": "Ingeniería de IA & Ciencia Ficción",
            "hobby_reading_tag": "ARQUITECTURA & LORE",
            "hobby_reading_desc": "Equilibrio entre literatura técnica de vanguardia en Inteligencia Artificial y grandes sagas de estrategia espacial y fantasía oscura:",
            "hobby_reading_ai_label": "Libro Técnico IA:",
            "hobby_reading_ai_book": "AI Engineering: Building Applications with Foundation Models (Chip Huyen)",
            "hobby_reading_scifi_label": "Sagas Sci-Fi & Lore:",
            "hobby_reading_scifi_books": "La Saga de El Juego de Ender (Orson Scott Card) & Novelas de Warhammer 40K / The Horus Heresy",

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

            "offline_section": "> OFFLINE_MODE // LORE & UI DESIGN ORIGIN",
            "offline_heading": "Disconnection Protocols & Visual Identity",
            "offline_subtitle": "The tactical, literary, and creative engineering passions behind the Crimson & Obsidian aesthetic of this portfolio.",
            "profile_lore_badge": "🛡️ UI inspired by the IX Legion heraldry (WH40K) — [ View Design Origin & Offline Mode ↓ ]",

            "hobby_wh40k_title": "WARHAMMER 40,000",
            "hobby_wh40k_sub": "IX Legion · Blood Angels",
            "hobby_wh40k_tag": "UI DESIGN ORIGIN",
            "hobby_wh40k_desc": "Passionate follower of the Imperium of Man lore and the 9th Legion (Blood Angels). Within the lore, our Primarch Sanguinius (The Great Angel) is our genetic and spiritual 'father' as sons of his Legion.",
            "hobby_wh40k_design": "🎨 Why this design: The entire UI of this portfolio (blood-crimson #DC2626 over obsidian-black armor and tactical HUD telemetry) is directly inspired by the heraldry of the Blood Angels.",

            "hobby_pokednd_title": "POKE D&D",
            "hobby_pokednd": "Player & RPG Platform Creator",
            "hobby_pokednd_tag": "LIVE APP · D20 ENGINE",
            "hobby_pokednd_desc": "Tabletop RPG player and creator of the new interactive web platform built to automate character sheets, dice rolls, and real-time tactical RPG combat.",
            "hobby_pokednd_roll_btn": "Roll D20",
            "hobby_pokednd_visit_btn": "Open pokedyd.online",
            "hobby_pokednd_crit": "NATURAL 20! A Critical Hit worthy of Sanguinius: +100% deploy success 🔥",
            "hobby_pokednd_fail": "CRITICAL 1! Critical Fumble: The server survived thanks to Clean Architecture 🛡️",
            "hobby_pokednd_high": "Epic Roll! Mid-Senior tactical precision achieved ⚡",
            "hobby_pokednd_norm": "Tactical check passed. All systems nominal.",

            "hobby_anime_title": "SCI-FI & MECHA",
            "hobby_anime_sub": "Strategy & Willpower",
            "hobby_anime_tag": "CYBER-TACTICAL INSPIRATION",
            "hobby_anime_desc": "Stories of military strategy, chess-like calculation, and mecha engineering that inspire the HUD and terminal panels across this system:",

            "hobby_reading_title": "TECH & SCI-FI READING",
            "hobby_reading": "AI Engineering & Sci-Fi Lore",
            "hobby_reading_tag": "ARCHITECTURE & LORE",
            "hobby_reading_desc": "Balancing cutting-edge Artificial Intelligence engineering literature with classic space-strategy sagas and grimdark lore:",
            "hobby_reading_ai_label": "AI Engineering Book:",
            "hobby_reading_ai_book": "AI Engineering: Building Applications with Foundation Models (Chip Huyen)",
            "hobby_reading_scifi_label": "Sci-Fi Sagas & Lore:",
            "hobby_reading_scifi_books": "The Ender's Game Saga (Orson Scott Card) & Warhammer 40K / The Horus Heresy Novels",

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
