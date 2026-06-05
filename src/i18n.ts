import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            "header_system": "> Sistema en línea_",
            "header_hello": "Hola, soy",
            "header_button": "Explorar Perfil",

            "projects_section": "> Archivos_Ejecutables_",
            "projects_heading": "Casos de Estudio",
            "projects_view_code": "[ Ver_Código ] ↗",

            "proj1_title": "Sistema de Gestión de Panaderías",
            "proj1_desc": "Ecosistema Full-Stack desarrollado para validar y estresar un modelo relacional de base de datos SQL. Implementación de backend en C#/.NET con índices optimizados. Impacto: Reducción del tiempo de procesamiento de pedidos en un 30% y garantía de integridad referencial absoluta.",

            "proj2_title": "QA Automation Suite",
            "proj2_desc": "Framework de pruebas automatizadas E2E diseñado con Playwright y TypeScript. Enfocado en la validación de flujos críticos de usuario. Impacto: Reducción de la deuda técnica en un 20% y aumento significativo en la cobertura de pruebas en entornos CI/CD.",

            "proj3_title": "Axel Linares API Core",
            "proj3_desc": "Backend empresarial desarrollado en .NET 8 / C# que sirve como el motor centralizado de datos. Diseñado bajo patrones de Arquitectura Limpia, inyección de dependencias y optimizado para despliegues serverless de alta disponibilidad en AWS.",

            "proj4_title": "Dossier Digital Interactivo",
            "proj4_desc": "El cliente frontend de este portafolio. Desarrollado en React y TypeScript para demostrar habilidades de interfaz adaptativa, internacionalización nativa (i18n) y micro-animaciones fluidas con cero impacto en el rendimiento de la GPU.",

            "profile_section": "> Protocolo_Identidad_",
            "profile_heading": "Ingeniería con Propósito",
            "profile_bio": "Desarrollador Backend Mid-Level y especialista en QA Automation con una obsesión por la estabilidad del sistema y la integridad de los datos. Mi enfoque combina la disciplina del análisis táctico con la potencia del stack .NET para construir arquitecturas que no solo funcionan, sino que escalan bajo presión.",

            "pilar1_title": "Integridad",
            "pilar1_desc": "El dato es el activo más valioso. Diseño bases de datos SQL con integridad referencial absoluta.",
            "pilar2_title": "Estabilidad",
            "pilar2_desc": "Si no está probado, está roto. Implemento suites de QA E2E que eliminan la incertidumbre.",
            "pilar3_title": "Escalabilidad",
            "pilar3_desc": "Backend diseñado para la nube. Arquitecturas .NET preparadas para el ecosistema AWS.",

            "exp_heading": "Experiencia en Combate",
            "edu_section": "> Base_de_Conocimiento_",
            "edu_heading": "Certificaciones y Entrenamiento",
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
            "projects_heading": "Cases of Study",
            "projects_view_code": "[ View_Code ] ↗",

            "proj1_title": "Bakery Management System",
            "proj1_desc": "Full-Stack ecosystem engineered to validate and stress-test a complex SQL relational database model. Developed C#/.NET backend with optimized indexes. Impact: Reduced order processing time by 30% while ensuring absolute referential integrity.",

            "proj2_title": "QA Automation Suite",
            "proj2_desc": "End-to-End (E2E) automated testing framework engineered with Playwright and TypeScript. Focused on critical user workflow validation. Impact: Reduced technical debt by 20% and significantly increased test coverage in CI/CD pipelines.",

            "proj3_title": "Axel Linares API Core",
            "proj3_desc": "Enterprise-grade backend developed in .NET 8 / C# serving as the centralized data engine. Architected under Clean Architecture principles, dependency injection, and optimized for high-availability AWS cloud environments.",

            "proj4_title": "Interactive Digital Dossier",
            "proj4_desc": "The frontend client of this portfolio. Developed with React and TypeScript to showcase advanced adaptive UI capabilities, native internationalization (i18n), and fluid micro-animations with zero GPU performance overhead.",

            "profile_section": "> Identity_Protocol_",
            "profile_heading": "Engineering with Purpose",
            "profile_bio": "Mid-Level Backend Developer and QA Automation specialist with an obsession for system stability and data integrity. My approach combines tactical analysis discipline with the power of the .NET stack to build architectures that don't just work—they scale under pressure.",

            "pilar1_title": "Integrity",
            "pilar1_desc": "Data is the most valuable asset. I design SQL databases with absolute referential integrity.",
            "pilar2_title": "Stability",
            "pilar2_desc": "If it's not tested, it's broken. I implement E2E QA suites that eliminate uncertainty.",
            "pilar3_title": "Scalability",
            "pilar3_desc": "Backend designed for the cloud. .NET architectures ready for the AWS ecosystem.",

            "exp_heading": "Combat Experience",
            "edu_section": "> Knowledge_Base_",
            "edu_heading": "Certifications & Training",
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