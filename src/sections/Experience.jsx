import { FaBriefcase, FaMapMarkerAlt, FaCode, FaServer } from "react-icons/fa";

const experiences = [
  {
    company: "ERA - Voz, mensagem e IA",
    role: "Desenvolvedor júnior/pleno",
    type: "Tempo integral",
    period: "fev de 2026 - o momento · 7 meses",
    location: "Campinas, São Paulo, Brasil · No local",
    skills: ["PHP", "Conteinerização", "e mais 2 competências"],
    icon: <FaCode />,
  },
  {
    company: "GRV SOFTWARE",
    role: "Desenvolvedor de software",
    subtitle: "Trainee/junior",
    period: "jul de 2025 - fev de 2026 · 8 meses",
    location: "Vinhedo, São Paulo, Brasil · No local",
    skills: ["Vue.js", "Frappe", "e mais 12 competências"],
    icon: <FaServer />,
    description: [
      "Desenvolvimento backend com linguagem Python.",
      "Experiência com o framework Frappe para desenvolvimento e otimização de projetos internos.",
      "Desenvolvimento frontend utilizando JavaScript, CSS, HTML e Vue.js.",
      "Manutenção e desenvolvimento de APIs.",
      "Correção de bugs e implementação de novas funcionalidades no código.",
      "Controle de versão de projetos utilizando Git e GitHub.",
    ],
    extra: ["Conteinerização", "Linux"],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="section-topline"><span>03 / EXPERIÊNCIA</span><span>TRAJETÓRIA PROFISSIONAL</span></div>
      <h2>Experiência <em>Profissional</em></h2>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={`${experience.company}-${experience.role}`}>
            <div className="experience-marker">{experience.icon}</div>
            <div className="experience-main">
              <div className="experience-heading">
                <div>
                  <p className="company-name">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  {experience.subtitle && <p className="experience-subtitle">{experience.subtitle}</p>}
                </div>
                {experience.type && <span className="employment-type">{experience.type}</span>}
              </div>
              <div className="experience-meta">
                <span><FaBriefcase /> {experience.period}</span>
                <span><FaMapMarkerAlt /> {experience.location}</span>
              </div>
              {experience.description && (
                <ul className="experience-description">
                  {experience.description.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              <div className="experience-skills">
                {[...experience.skills, ...(experience.extra || [])].map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
