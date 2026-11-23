import React from 'react';
import { Terminal, Layers, ShieldCheck, Cloud, Shield, Bot, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SkillsProps {
  hardSkills?: string[];
  softSkills?: string[];
}

const Skills: React.FC<SkillsProps> = ({ softSkills = [] }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');

  const skillCategories = [
    {
      title: t('skills_cat_languages', 'Lenguajes'),
      code: '01 / CORE',
      icon: <Terminal className="text-red-500 w-5 h-5" />,
      skills: ['C#', 'Python', 'SQL', 'Java', 'C++', 'JavaScript', 'TypeScript', 'CFML']
    },
    {
      title: t('skills_cat_frameworks', 'Frameworks & Arquitectura'),
      code: '02 / ARCH',
      icon: <Layers className="text-amber-400 w-5 h-5" />,
      skills: ['.NET 8 / Core', '.NET Framework', 'ASP.NET Core', 'Spring Boot', 'APIs REST (RFC 7807)', 'Microservicios', 'React / Angular', 'Clean Architecture']
    },
    {
      title: t('skills_cat_qa', 'QA & Cloud Browser Automation'),
      code: '03 / QA',
      icon: <ShieldCheck className="text-emerald-400 w-5 h-5" />,
      skills: ['Playwright (E2E)', 'Browserbase (Cloud Headless)', 'Robot Framework', 'Page Object Model (POM)', 'xUnit / NUnit / Moq', 'Shift-Left Testing']
    },
    {
      title: t('skills_cat_cloud', 'Cloud, PaaS & Herramientas'),
      code: '04 / CLOUD',
      icon: <Cloud className="text-blue-400 w-5 h-5" />,
      skills: ['AWS (S3, CloudFront, EB)', 'Render (Cloud PaaS)', 'Git / GitHub Actions', 'JetBrains (Rider, DataGrip)', 'Miro (System Design)', 'Google Developer Program']
    },
    {
      title: t('skills_cat_security', 'Ciberseguridad & AppSec'),
      code: '05 / SEC',
      icon: <Shield className="text-red-400 w-5 h-5" />,
      skills: ['Threat Management', 'Network Defense', 'Análisis SOC', 'Mitigación OWASP Top 10', 'Rate Limiting & Sanitización CRLF']
    },
    {
      title: t('skills_cat_ai', 'IA, Agentes & Orquestación'),
      code: '06 / AI-OPS',
      icon: <Bot className="text-amber-400 w-5 h-5" />,
      skills: [
        'n8n.cloud (Workflows Multi-Agente)',
        'Backboard.io (Persistent Memory)',
        'Firecrawl (AI Web Scraping)',
        'Devin & Lovable (Autonomous Dev)',
        'OpenAI & ElevenLabs APIs',
        'MediaPipe (Computer Vision)'
      ]
    }
  ];

  const defaultSoftSkills = isEn ? [
    'Technical Leadership',
    'Self-Directed Continuous Learning',
    'Complex Problem Solving',
    'High-Signal Technical Communication',
    'Architectural Adaptability',
    'Critical & Analytical Thinking',
    'Shift-Left Quality Culture',
    'Resilience under High Pressure'
  ] : [
    'Liderazgo Técnico',
    'Aprendizaje Autónomo (Autodidacta)',
    'Resolución de Problemas Complejos',
    'Comunicación Técnica Efectiva',
    'Adaptabilidad Tecnológica',
    'Pensamiento Crítico y Analítico',
    'Shift-Left Testing & Cultura de Calidad',
    'Resiliencia bajo Presión'
  ];

  const finalSoftSkills = softSkills && softSkills.length > 0 ? softSkills : defaultSoftSkills;

  return (
    <section id="habilidades" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span className="font-mono text-xs text-amber-400/90 tracking-widest uppercase">
              03 // {t('skills_section', '> CAPACIDADES_')}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            {t('skills_heading', 'Arsenal Técnico')}
          </h2>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#111318]/70 border border-slate-800 border-t-amber-500/30 rounded-lg p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {category.icon}
                  </div>
                  <span className="font-mono text-[10px] text-amber-500/80 tracking-wider">
                    {category.code}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-white tracking-wide mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-[#0d0f14] border border-slate-800/90 text-xs font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Philosophy Bar */}
        <div className="p-6 rounded-lg bg-[#111318]/70 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-amber-400 w-4 h-4" />
            <h4 className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-widest">
              {isEn ? '03.1 // ENGINEERING PRACTICES & SOFT SKILLS' : '03.1 // PRÁCTICAS DE INGENIERÍA & SOFT SKILLS'}
            </h4>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {finalSoftSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-red-500/40 hover:text-white transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
