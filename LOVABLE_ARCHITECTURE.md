# 🏛️ Fullstack Architecture & API Contracts (Axel Linares Portfolio)

This document provides full context for Lovable regarding the decoupled architecture between this React frontend and the .NET 8 Web API backend (`AxelLinaresApi`).

---

## 📡 1. Backend API Specification (.NET 8 Web API)

The frontend consumes an external .NET 8 Web API with two primary endpoints:

### Endpoint A: `GET /api/Profile`
* **Query Parameter:** `?lang=es` or `?lang=en` (supports real-time language switching).
* **Environments:**
  * **Local:** `http://localhost:5139/api/Profile?lang={lang}`
  * **Production (AWS):** `https://d1xk37jjpjmwph.cloudfront.net/api/Profile?lang={lang}`
* **Response DTO (`UserProfileDto`):**
  * `id`: `number`
  * `name`: `"AXEL ALBERTO LINARES LORRABAQUIO"`
  * `title`: `"Ingeniero de Software | Backend (.NET/C#) & QA Automation"`
  * `summary`: `string` (3 years exp, .NET, QA, Playwright, AWS)
  * `email`: `"axel.a.linares@gmail.com"`
  * `phone`: `"5542284164"`
  * `location`: `"CDMX, México"`
  * `linkedInUrl`: `string`
  * `gitHubUrl`: `string`
  * `hardSkills`: `string[]` (.NET, C#, Python, SQL, Playwright, AWS, etc.)
  * `softSkills`: `string[]`
  * `experiences`: `WorkExperienceDto[]` (`id`, `jobTitle`, `company`, `dates`, `companyUrl`, `responsibilities[]`)
  * `certifications`: `CertificationDto[]` (`id`, `name`, `issuingOrganization`, `credentialUrl`)
  * `projects`: `ProjectDto[]` (`id`, `title`, `description`, `projectUrl`, `category`, `badge`, `techStack[]`, `architectureNotes[]`)

### Endpoint B: `POST /api/email/send`
* **Purpose:** Contact form submission (Vox-Transmitter).
* **Payload:**
  ```json
  {
    "name": "string (required)",
    "email": "string (email format, required)",
    "subject": "string (required)",
    "message": "string (required)"
  }
  ```
* **Security & Resilience:**
  * Protected by .NET 8 `FixedWindowRateLimiter` per IP (`EmailRateLimitPolicy`).
  * Responses adhere to **RFC 7807 `ProblemDetails`** on error (e.g., HTTP 429 Too Many Requests, HTTP 400 Validation Error).

---

## 🛡️ 2. Frontend Integration Strategy (Resilience & Fallback)

Lovable should structure the data fetching with a **resilient client pattern**:
1. **Try Live Backend First:** Fetch from `${API_BASE_URL}/api/Profile?lang=${currentLanguage}`.
2. **Local Fallback Data:** If the backend is unreachable or during preview in Lovable, seamlessly fall back to local mock/seed data (`src/data/profileData.ts`) so the UI never displays a broken or empty state.
3. **Environment Detection:**
   ```ts
   const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
   export const API_BASE = isLocal
     ? 'http://localhost:5139'
     : 'https://d1xk37jjpjmwph.cloudfront.net';
   ```

---

## ⚔️ 3. Design Directive: Warhammer 40K — IX Legion (Blood Angels)

* Refactor the presentation layer into the **Baroque Cyber-Gothic / Blood Angels** aesthetic:
  * Imperial Crimson, Auric Gold, Obsidian Iron, and Alabaster Parchment.
  * Interactive Purity Seals for badges and certifications.
  * Imperial Cogitator auspex frames and status terminals.
  * Preserving all existing business logic, modals (ContactModal, PortfolioTestSuiteModal), and real profile metrics.
