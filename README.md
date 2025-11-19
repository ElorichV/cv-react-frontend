# CV React Frontend

Aplicación frontend desarrollada en React + TypeScript + Vite para mostrar información de perfil dinámicamente desde una API .NET.

## Tecnologías

- React 19
- TypeScript
- Vite
- Axios para peticiones HTTP
- ESLint
- AWS S3 (hosting estático)

## URLs

### Desarrollo
```
http://localhost:5173
```

### Producción
```
http://axel-cv-frontend.s3-website.us-east-2.amazonaws.com
```

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Linter
npm run preview  # Preview del build
```

## Instalación y Desarrollo

```bash
npm install
npm run dev
```

## Despliegue en AWS S3

### Pasos de Despliegue

#### 1. Configuración de la API
Actualizar la URL de la API en `src/App.tsx`:
```typescript
axios.get('http://axellinaresapi-env.eba-paimdqea.us-east-2.elasticbeanstalk.com/api/Profile')
```

#### 2. Build de Producción
```bash
npm run build
```
Esto genera la carpeta `dist/` con los archivos optimizados.

#### 3. Crear Bucket S3
- **Nombre**: `axel-cv-frontend`
- **Región**: `us-east-2`
- **Acceso público**: Habilitado

#### 4. Configurar Hosting Estático
- **Documento de índice**: `index.html`
- **Documento de error**: `index.html`

#### 5. Configurar Permisos
**Política del bucket**:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::axel-cv-frontend/*"
        }
    ]
}
```

#### 6. Subir Archivos
**IMPORTANTE**: Subir el **contenido** de la carpeta `dist/`, no la carpeta misma:
```
S3 Bucket (raíz):
├── index.html
├── assets/
│   ├── index-B-JSCAHL.css
│   └── index-DaYBpWcw.js
└── vite.svg
```

### Problemas Comunes y Soluciones

#### Error 403 Forbidden
**Causa**: Permisos del bucket no configurados
**Solución**: 
1. Desbloquear acceso público en "Permisos"
2. Aplicar política del bucket
3. Verificar que hosting estático esté habilitado

#### Error "Expected params.WebsiteConfiguration.RoutingRules to be an Array"
**Causa**: Configuración incorrecta del hosting estático
**Solución**: 
1. Deshabilitar hosting estático
2. Volver a habilitar con configuración básica
3. NO agregar reglas de redirección

#### Página carga pero no muestra datos
**Causa**: Error de CORS o API no disponible
**Solución**: 
1. Verificar que la API esté funcionando
2. Revisar consola del navegador (F12)
3. Confirmar URL de la API en el código

## Estructura del Proyecto

- `src/App.tsx` - Componente principal con lógica de la API
- `src/App.css` - Estilos de la aplicación
- `public/` - Archivos estáticos
- `dist/` - Build de producción (generado)

## Funcionalidades

- **Carga dinámica**: Obtiene datos desde API .NET en tiempo real
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Manejo de errores**: Muestra mensajes informativos
- **Loading states**: Indicadores de carga
- **Tipado fuerte**: TypeScript para mejor desarrollo

## Integración con API

La aplicación consume los siguientes endpoints:
- `GET /api/Profile` - Datos completos del perfil profesional

Los datos incluyen:
- Información personal
- Experiencia laboral
- Proyectos
- Habilidades técnicas
- Educación y certificaciones
- Hobbies e intereses