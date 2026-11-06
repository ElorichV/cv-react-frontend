import React from 'react';
import { Terminal, Layers, ShieldCheck, Cloud, Shield, Bot, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SkillsProps {
  hardSkills?: string[];
  softSkills?: string[];
}

const Skills: React.FC<SkillsProps> = ({ softSkills = [] }) => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills_cat_languages', 'Lenguajes'),
      icon: <Terminal className="text-red-500 w-5 h-5" />,
      skills: ['C#', 'Python', 'SQL', 'Java', 'C++', 'JavaScript', 'TypeScript', 'CFML']
    },
    {
      title: t('skills_cat_frameworks', 'Frameworks & Arquitectura'),
      icon: <Layers className="text-red-500 w-5 h-5" />,
      skills: ['.NET 8 / Core', '.NET Framework', 'ASP.NET Core', 'Spring Boot', 'APIs REST (RFC 7807)', 'Microservicios', 'React / Angular', 'Clean Architecture']
    },
    {
      title: t('skills_cat_qa', 'QA & Cloud Browser Automation'),
      icon: <ShieldCheck className="text-red-500 w-5 h-5" />,
      skills: ['Playwright (E2E)', 'Browserbase (Cloud Headless Browsers)', 'Robot Framework', 'Page Object Model (POM)', 'xUnit / NUnit / Moq', 'Shift-Left Testing']
    },
    {
      title: t('skills_cat_cloud', 'Cloud, PaaS & Herramientas'),
      icon: <Cloud className="text-red-500 w-5 h-5" />,
      skills: ['AWS (S3, CloudFront, EB)', 'Render (Cloud PaaS)', 'Git / GitHub Actions', 'JetBrains (Rider, DataGrip, PyCharm)', 'Miro (System Design)', 'Google Developer Program']
    },
    {
      title: t('skills_cat_security', 'Ciberseguridad & AppSec'),
      icon: <Shield className="text-red-500 w-5 h-5" />,
      skills: ['Threat Management', 'Network Defense', 'Análisis SOC', 'Mitigación OWASP Top 10', 'Rate Limiting & Sanitización CRLF']
    },
    {
      title: t('skills_cat_ai', 'IA, Agentes & Orquestación'),
      icon: <Bot className="text-red-500 w-5 h-5" />,
      skills: [
        'n8n.cloud (Workflows Multi-Agente)',
        'Backboard.io (Persistent Memory & 17k+ LLMs)',
        'Firecrawl (AI Web Scraping)',
        'Devin & Lovable (Autonomous Dev)',
        'OpenAI & ElevenLabs APIs',
        'MediaPipe (Computer Vision)'
      ]
    }
  ];

  const defaultSoftSkills = [
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
    <section id="habilidades" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="mb-16">
          <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold">
            {t('skills_section', '> CAPACIDADES_')}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t('skills_heading', 'Arsenal Técnico')}
          </h2>
        </div>

        {/* Grid de 6 Categorías Técnicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-red-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-red-600/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 rounded-lg text-xs font-mono text-slate-300 hover:border-red-500/50 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección destacada de Competencias Profesionales (Soft Skills) */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-600/10 rounded-lg">
              <Users className="text-red-500 w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {t('skills_cat_soft', 'Competencias Profesionales')}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {finalSoftSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-300 bg-slate-800/40 p-3 rounded-xl border border-slate-700/40 hover:border-red-500/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
