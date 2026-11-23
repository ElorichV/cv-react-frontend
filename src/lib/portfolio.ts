export type Language = "EN" | "ES";
export type Bilingual = readonly [string, string];

export const profile = {
  name: "Axel Alberto Linares",
  role: [
    "Mid-Level Backend & QA Automation Software Engineer",
    "Ingeniero de Software Backend y Automatización QA · Nivel Mid-Level"
  ] as Bilingual,
  location: "CDMX",
  github: "https://github.com/ElorichV",
  email: "axel.a.linares@gmail.com",
};

export const capabilities = [
  {
    id: "01",
    icon: "backend",
    title: ["Backend Architecture", "Arquitectura Backend"] as Bilingual,
    focus: ["Transactional integrity. Sub-second latency.", "Integridad transaccional. Latencia inferior al segundo."] as Bilingual,
    description: [
      "Reliable domain boundaries and deliberate data flows. Systems engineered to remain consistent under high concurrency.",
      "Límites de dominio confiables y flujos de datos estructurados. Sistemas diseñados para conservar la consistencia bajo alta concurrencia."
    ] as Bilingual,
    skills: ["C#", ".NET 8", "ASP.NET Core", "Clean Architecture", "CQRS", "SQL Server", "EF Core"]
  },
  {
    id: "02",
    icon: "qa",
    title: ["Automated Quality Assurance", "Aseguramiento de Calidad Automatizado"] as Bilingual,
    focus: ["Zero-flakiness doctrine. Confidence at every release.", "Pruebas sin inestabilidad. Confianza en cada entrega."] as Bilingual,
    description: [
      "Repeatable end-to-end testing with maintainable abstractions and quality gates built into the delivery pipeline.",
      "Pruebas end-to-end repetibles con abstracciones mantenibles y controles de calidad integrados en el ciclo de entrega."
    ] as Bilingual,
    skills: ["Playwright Sharp", "C#", "NUnit", "Page Object Model", "CI/CD Quality Gates", "Regression Testing"]
  },
  {
    id: "03",
    icon: "cloud",
    title: ["Cloud & Resilient Infrastructure", "Nube e Infraestructura Resiliente"] as Bilingual,
    focus: ["Built to endure stress. Designed for scale.", "Resistencia bajo estrés. Diseño para escalar."] as Bilingual,
    description: [
      "Secure services, containerized deployments, and cloud infrastructure with resilience as a first-class concern.",
      "Servicios seguros, despliegues en contenedores e infraestructura cloud con resiliencia como principio fundamental."
    ] as Bilingual,
    skills: ["AWS S3", "CloudFront", "Elastic Beanstalk", "Docker", "Microservices", "REST APIs", "RFC 7807", "OWASP"]
  },
];

export const projects = [
  {
    id: "01",
    category: ["TRANSACTIONAL SYSTEMS", "SISTEMAS TRANSACCIONALES"] as Bilingual,
    title: ["Bakery ERP & Transactional Stock Engine", "ERP de Panadería y Motor de Inventario Transaccional"] as Bilingual,
    description: [
      "A bakery management system built around clean architecture and transactional stock integrity. Domain logic and persistence work together without compromising consistency.",
      "Sistema de gestión para panaderías basado en arquitectura limpia e integridad transaccional del inventario. Dominio y persistencia coordinados con garantías ACID."
    ] as Bilingual,
    tags: [".NET 8", "Clean Architecture", "SQL Server"],
    repo: "https://github.com/ElorichV/Sistema-de-gestion-para-panaderias",
    live: "",
    diagram: "transactions",
    label: "DOMAIN → TRANSACTION → COMMIT"
  },
  {
    id: "02",
    category: ["QUALITY ENGINEERING", "INGENIERÍA DE CALIDAD"] as Bilingual,
    title: ["Enterprise E2E QA Automation Framework", "Framework Empresarial de Automatización QA E2E"] as Bilingual,
    description: [
      "An end-to-end automation framework combining Playwright with C# and NUnit. Structured test flows and reusable page objects turn regression testing into a repeatable discipline.",
      "Framework end-to-end que combina Playwright con C# .NET y NUnit. Flujos estructurados y Page Object Model que eliminan flakiness en entornos CI/CD."
    ] as Bilingual,
    tags: ["C# .NET 8", "Playwright", "NUnit", "POM"],
    repo: "https://github.com/ElorichV/Playwrigth_Demo",
    live: "",
    diagram: "tests",
    label: "ARRANGE → ACT → ASSERT"
  },
  {
    id: "03",
    category: ["BACKEND INFRASTRUCTURE", "INFRAESTRUCTURA BACKEND"] as Bilingual,
    title: ["Axel Linares API Core", "Axel Linares API Core"] as Bilingual,
    description: [
      "A .NET backend with rate limiting and AWS CloudFront delivery. An intentionally structured API layer connecting application logic to reliable, controlled access.",
      "Backend en .NET 8 con políticas de rate limiting y distribución global en AWS CloudFront. Capa de API estructurada bajo estándares REST y RFC 7807."
    ] as Bilingual,
    tags: [".NET 8", "Rate Limiting", "AWS CloudFront"],
    repo: "https://github.com/ElorichV/AxelLinaresApi",
    live: "",
    diagram: "api",
    label: "EDGE → GATEWAY → SERVICE"
  },
  {
    id: "04",
    category: ["FRONTEND ENGINEERING", "INGENIERÍA FRONTEND"] as Bilingual,
    title: ["Digital Dossier SPA", "Dossier Digital Interactivo"] as Bilingual,
    description: [
      "A modern single-page professional dossier. React 19 and TypeScript power a focused interface, delivered through Vite and styled with Tailwind CSS.",
      "Dossier profesional interactivo en Single Page Application. Construido con React 19, TypeScript, Vite y Tailwind CSS sin sobrecosto de rendimiento."
    ] as Bilingual,
    tags: ["React 19", "TypeScript", "Vite", "Tailwind"],
    repo: "https://github.com/ElorichV/cv-react-frontend",
    live: "https://d1xk37jjpjmwph.cloudfront.net/",
    diagram: "spa",
    label: "COMPOSE → RENDER → DELIVER"
  },
];

export const experience = [
  {
    company: "Positronica Labs",
    start: "2026-01",
    end: null,
    dates: ["JAN 2026 — PRESENT", "ENE 2026 — ACTUALIDAD"] as Bilingual,
    role: ["Full-Stack Software Engineer & QA Lead", "Ingeniero de Software Full-Stack y Líder QA"] as Bilingual,
    description: [
      "Applied AI, .NET 8 backends, and Playwright E2E quality gates. Engineering reliable architectures across the application and testing lifecycle.",
      "IA aplicada, backends en .NET 8 y controles de calidad E2E con Playwright. Arquitectura de microservicios y despliegue continuo de alta confiabilidad."
    ] as Bilingual,
    tags: ["Applied AI", ".NET 8", "Playwright"],
    metric: null,
    metricLabel: null,
    url: "https://positronicalabs.dev/team"
  },
  {
    company: "Sección Amarilla (ADN)",
    start: "2026-03",
    end: null,
    dates: ["MAR 2026 — PRESENT", "MAR 2026 — ACTUALIDAD"] as Bilingual,
    role: ["QA Automation Specialist", "Especialista en Automatización QA"] as Bilingual,
    description: [
      "Enterprise E2E test suites using C# .NET 8 and Playwright. Shortened defect detection cycles by 30% with systematic automation.",
      "Suites E2E empresariales con C# .NET 8 y Playwright. Reducción del 30% en los ciclos de detección de defectos mediante automatización sistemática."
    ] as Bilingual,
    tags: ["C#", "E2E Automation", "Quality Gates"],
    metric: 30,
    metricLabel: ["SHORTER DETECTION CYCLES", "CICLOS DE DETECCIÓN MÁS CORTOS"] as Bilingual,
    url: ""
  },
  {
    company: "Solera",
    start: "2022-08",
    end: "2025-02",
    dates: ["AUG 2022 — FEB 2025", "AGO 2022 — FEB 2025"] as Bilingual,
    role: ["Associate Software Engineer I", "Ingeniero de Software Asociado I"] as Bilingual,
    description: [
      "Backend microservices and SQL Server query tuning within the .NET ecosystem. Reduced query latency by 40% through targeted index and query optimization.",
      "Microservicios backend y optimización de consultas SQL Server en el ecosistema .NET. Reducción del 40% en latencia mediante optimización dirigida."
    ] as Bilingual,
    tags: [".NET", "SQL Server", "Microservices"],
    metric: 40,
    metricLabel: ["LOWER QUERY LATENCY", "MENOR LATENCIA EN CONSULTAS"] as Bilingual,
    url: ""
  },
];

export const credentials = [
  {
    title: "Cybersecurity Defense Analyst",
    issuer: "CISCO",
    code: "SEC / 01",
    verify: "https://www.credly.com/users/axel-alberto-linares-lorrabaquio/badges"
  },
  {
    title: "Cyber Threat Management & Network Defense",
    issuer: "CISCO",
    code: "SEC / 02",
    verify: "https://www.credly.com/users/axel-alberto-linares-lorrabaquio/badges"
  },
  {
    title: "Certified C++ Programmer (CPP)",
    issuer: "C++ INSTITUTE",
    code: "CPP",
    verify: ""
  },
  {
    title: "Certified Python Programmer (PCAP & PCEP)",
    issuer: "PYTHON INSTITUTE",
    code: "PCAP / PCEP",
    verify: ""
  },
  {
    title: "AWS Cloud Practitioner (CLF-C02)",
    issuer: "AWS",
    code: "CLF",
    verify: ""
  },
];

export function messageDraft(name: string, email: string, message: string, lang: Language) {
  return `${lang === "EN" ? "Portfolio inquiry" : "Consulta del portafolio"}\n\n${name.trim()} <${email.trim()}>\n\n${message.trim()}`;
}
