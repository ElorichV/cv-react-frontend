# CV React Frontend

Aplicación SPA (Single Page Application) desarrollada para mostrar un portafolio profesional dinámico. Consume una API .NET externa y está optimizada para rendimiento y seguridad en la nube.

## 🛠 Tecnologías

- **Core**: React 18+, TypeScript, Vite
- **Estilizado**: Tailwind CSS + React Icons
- **Comunicación**: Axios (HTTP Client)
- **Infraestructura**: AWS S3 (Hosting Estático) + AWS CloudFront (CDN & SSL)

## 🌍 URLs del Proyecto

- **Desarrollo Local**: `http://localhost:5173`
- **Producción (Pública y Segura)**: `https://d1xk37jjpjmwph.cloudfront.net/`
- **Origen S3 (Interno)**: `http://axel-cv-frontend.s3-website.us-east-2.amazonaws.com/`

## 🚀 Comandos Principales

```bash
npm install      # Instalar dependencias (node_modules)
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción (genera carpeta /dist)
```

## ☁️ Arquitectura de Despliegue (AWS)
El despliegue utiliza una arquitectura Serverless Frontend:

**AWS S3**: Actúa como el servidor de origen, almacenando los archivos estáticos (HTML, CSS, JS) generados por el comando build.

**AWS CloudFront**: Actúa como la capa de distribución global.
- Provee el certificado SSL/TLS (HTTPS) que S3 no tiene nativamente.
- Actúa como Proxy Inverso para unificar el Frontend y el Backend bajo un mismo dominio.

### Configuración del "Puente" en CloudFront
Para resolver problemas de seguridad modernos, CloudFront se configuró con dos orígenes:

- **Origen Default (*)**: Apunta al bucket de S3. Sirve la página web.
- **Origen API (/api/*)**: Apunta al entorno de Elastic Beanstalk.

**Behavior**: Cualquier petición a https://midominio.net/api/* es redirigida internamente al servidor HTTP de .NET.

**Beneficio**: El navegador solo ve HTTPS, eliminando errores de "Mixed Content".

## 🔧 Bitácora de Problemas y Soluciones (Troubleshooting)
Durante la construcción de este frontend, superamos los siguientes obstáculos técnicos:

### 1. Error Crítico: "Mixed Content" (Bloqueo de Seguridad)
**Problema**: El sitio cargaba en HTTPS (CloudFront), pero intentaba hacer peticiones a la API que estaba en HTTP (Elastic Beanstalk). Los navegadores bloquean esto automáticamente.

**Solución**: Se implementó un Behavior en CloudFront.
- Se creó un nuevo origen apuntando a la API de Elastic Beanstalk.
- Se configuró la ruta /api/* para redirigir el tráfico a ese origen.
- Se actualizó el código de React (App.tsx) para llamar a la API usando la URL relativa/segura de CloudFront.

### 2. Error de Gateway: "504 Gateway Timeout" en CloudFront
**Problema**: CloudFront intentaba conectar con el bucket de S3 usando HTTPS, pero el modo "Website Hosting" de S3 solo soporta HTTP. La conexión fallaba por tiempo de espera.

**Solución**: Se cambió la configuración del "Origin Protocol Policy" en CloudFront a "HTTP Only". Esto permite que CloudFront hable con S3 en HTTP (interno), pero sirva al usuario final en HTTPS (seguro).

### 3. Conflicto de Entorno Local: "npm/nvm no se reconoce"
**Problema**: Conflicto entre una instalación nativa de Node.js y NVM (Node Version Manager), sumado al uso de CMD que no cargaba correctamente las variables de entorno.

**Solución**: Desinstalación total de Node/NVM, reinstalación limpia de NVM, uso de PowerShell y activación explícita con nvm use 20.

### 4. Error de Estructura: Dependencias en carpeta raíz
**Problema**: Se ejecutó npm install en la carpeta equivocada (C:\Proyectos), creando node_modules fuera del proyecto.

**Solución**: Limpieza manual de archivos y reinstalación de dependencias dentro de la carpeta correcta cv-react-frontend.

### 5. Actualizaciones no reflejadas (Caché persistente)
**Problema**: Al subir cambios a S3 (como la corrección de la URL de la API), el sitio en vivo seguía mostrando la versión antigua debido al caché agresivo de la CDN.

**Solución**: Se ejecutó una Invalidación en CloudFront con la ruta /* para purgar el caché global y forzar la descarga de los nuevos archivos.

## 📁 Estructura del Código (src/)

### Arquitectura Modular
El proyecto se refactorizó de un monolito a una arquitectura de componentes modulares:

- **App.tsx**: Componente principal que gestiona el estado global, consume la API y orquesta todos los módulos.
- **components/**: Carpeta con componentes especializados:
  - `Header.tsx`: Información personal y enlaces sociales
  - `About.tsx`: Resumen profesional
  - `Experience.tsx`: Historial laboral
  - `Projects.tsx`: Portafolio de proyectos
  - `Skills.tsx`: Habilidades técnicas organizadas por categorías
  - `Education.tsx`: Formación académica y certificaciones
  - `Hobbies.tsx`: Intereses personales
  - `Footer.tsx`: Pie de página

### Configuración
- **tailwind.config.js**: Configuración personalizada de la marca (colores background, card, accent)
- **App.css / index.css**: Directivas base de Tailwind

## 🚀 Proceso de Despliegue

### 1. Preparar para Producción
```bash
# Cambiar App.tsx a modo producción (descomentar URL de CloudFront)
# Comentar URL localhost
```

### 2. Compilar
```bash
npm run build  # Genera carpeta /dist con archivos optimizados
```

### 3. Subir a AWS S3
```bash
# Opción A: AWS CLI (Recomendado)
aws s3 sync dist/ s3://axel-cv-frontend --delete

# Opción B: Consola Web AWS
# Subir manualmente archivos de /dist a bucket S3
```

### 4. Invalidar Caché CloudFront
```bash
# AWS CLI
aws cloudfront create-invalidation --distribution-id [TU-ID] --paths "/*"

# O desde consola web: CloudFront > Invalidations > Create
```

### 5. Revertir a Modo Local
```bash
# Cambiar App.tsx de vuelta a localhost para desarrollo
```

## 🔗 Integración con Backend

El frontend consume un único endpoint maestro que devuelve toda la estructura del portafolio:

### Configuración Dual de URLs
```typescript
// MODO LOCAL (Desarrollo)
axios.get('https://localhost:7081/api/Profile')

// MODO PRODUCCIÓN (Build)
axios.get('https://d1xk37jjpjmwph.cloudfront.net/api/Profile')
```

### Interfaces TypeScript
El proyecto define interfaces estrictas para garantizar consistencia con la API:
- `UserProfile`: Estructura principal del perfil
- `WorkExperience`: Historial laboral
- `Project`: Proyectos del portafolio
- `Skill`: Habilidades técnicas
- `EducationItem`: Formación académica
- `Certification`: Certificaciones
- `Hobby`: Intereses personales
- `Link`: Enlaces sociales/profesionales

**Beneficio**: Llamada segura a través del proxy de CloudFront, evitando errores de "Mixed Content" y unificando Frontend/Backend bajo HTTPS.