# 💻 CV React Frontend
*A modern, serverless Single Page Application showcasing a dynamic portfolio.*

🌍 **[Read in English](#english-version)** | 🌎 **[Leer en Español](#versión-en-español)**

---

<a id="english-version"></a>
## 🇺🇸 English Version

### 📌 Overview
This Single Page Application (SPA) serves as a dynamic, bilingual professional portfolio. It consumes a remote .NET 8 API to render profile data, work experience, and projects. The project utilizes a modern Serverless architecture, optimized for performance, security, and global delivery via AWS.

### 🛠️ Tech Stack
* **Core**: React 18+, TypeScript, Vite
* **Styling**: Tailwind CSS, React Icons (Glassmorphism UI)
* **Communication**: Axios (HTTP Client)
* **Infrastructure**: AWS S3 (Static Origin) + AWS CloudFront (CDN, SSL, Reverse Proxy)

### 🏗️ Cloud Deployment Architecture
The deployment utilizes a Serverless Frontend approach to eliminate Mixed Content errors and optimize delivery:
1. **AWS S3**: Acts as the origin server for static compiled assets (`/dist`).
2. **AWS CloudFront**: Provides the SSL/TLS layer and acts as a reverse proxy.
    * `/*` traffic is routed to S3.
    * `/api/*` traffic is securely proxied to the .NET Elastic Beanstalk backend.

### 🚀 Local Setup & Development

**1. Install dependencies:**
```bash
npm install
```

**2. Environment Configuration:**
Create a `.env` file in the root directory to define your API endpoint:
```env
VITE_API_URL=https://localhost:7081/api
```

**3. Start the development server:**
```bash
npm run dev
```

**4. Build for Production:**
```bash
npm run build
```
*Upload the contents of the generated `/dist` folder to your S3 bucket and invalidate the CloudFront cache.*

---

<a id="versión-en-español"></a>
## 🇲🇽 Versión en Español

### 📌 Descripción General
Esta Single Page Application (SPA) funciona como un portafolio profesional dinámico y bilingüe. Consume una API remota en .NET 8 para renderizar datos del perfil, experiencia laboral y proyectos. El proyecto utiliza una arquitectura Serverless moderna, optimizada para rendimiento, seguridad y entrega global a través de AWS.

### 🛠️ Stack Tecnológico
* **Core**: React 18+, TypeScript, Vite
* **Estilizado**: Tailwind CSS, React Icons (Interfaz Glassmorphism)
* **Comunicación**: Axios (Cliente HTTP)
* **Infraestructura**: AWS S3 (Origen Estático) + AWS CloudFront (CDN, SSL, Proxy Inverso)

### 🏗️ ArquArquitectura de Despliegue en la Nube
El despliegue utiliza un enfoque Frontend Serverless para eliminar errores de contenido mixto (Mixed Content) y optimizar la entrega:
1. **AWS S3**: Actúa como el servidor de origen para los archivos estáticos compilados (`/dist`).
2. **AWS CloudFront**: Proporciona la capa SSL/TLS y actúa como proxy inverso.
    * El tráfico `/*` se dirige a S3.
    * El tráfico `/api/*` se redirige de forma segura al backend de .NET en Elastic Beanstalk.

### 🚀 Configuración y Desarrollo Local

**1. Instalar dependencias:**
```bash
npm install
```

**2. Configuración de Entorno:**
Crea un archivo `.env` en la raíz del proyecto para definir tu endpoint local:
```env
VITE_API_URL=https://localhost:7081/api
```

**3. Iniciar el servidor de desarrollo:**
```bash
npm run dev
```

**4. Compilar para Producción:**
```bash
npm run build
```
*Sube el contenido de la carpeta `/dist` generada a tu bucket de S3 e invalida el caché de CloudFront.*

---
*Developed by Axel A. Linares - Software Engineer | .NET Backend & QA Automation*