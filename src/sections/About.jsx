import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaDatabase, 
  FaGitAlt, 
  FaDocker 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql,
  SiTailwindcss,
  SiVite,
  SiExpress
} from "react-icons/si";

export default function About() {
  const skills = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express", color: "#000000" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <SiVite />, name: "Vite", color: "#646CFF" },
  ];

  return (
    <section className="about" id="sobre">
      <div className="section-topline"><span>02 / SOBRE</span><span>FULL STACK</span></div>
      <h2>Sobre <em>Mim</em></h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Sou Desenvolvedor Full Stack com experiência prática no desenvolvimento e evolução de aplicações web,
            atuando desde a construção de interfaces até APIs, integrações e banco de dados.
          </p>
          <p>
            Tenho experiência com <strong>React, JavaScript, Node.js, Python, PHP, SQL, REST APIs e Frappe Framework</strong>,
            além de contato com <strong>Docker, Git, Supabase, PostgreSQL, MariaDB e serviços de cloud</strong>.
            Atuo na criação de sistemas, automações e soluções voltadas para necessidades reais de negócio,
            buscando sempre equilibrar funcionalidade, organização e facilidade de manutenção.
          </p>
          <p>
            Ao longo dos meus projetos, desenvolvi aplicações para diferentes cenários, incluindo
            <strong> sistemas de gestão, ERP, automações, integrações com APIs, plataformas financeiras e ferramentas web</strong>.
            Também tenho experiência trabalhando com análise e resolução de problemas, manutenção de sistemas existentes
            e implementação de novas funcionalidades.
          </p>
          <p>
            Gosto de transformar problemas em soluções práticas e tenho como principais características a
            <strong> capacidade de aprendizado rápido, pensamento analítico e autonomia para entender uma necessidade
            e transformar a ideia em uma solução funcional</strong>.
          </p>
          <p>
            Atualmente, busco oportunidades como <strong>Desenvolvedor Full Stack, Backend ou Frontend</strong>,
            em ambientes onde eu possa contribuir tecnicamente, evoluir profissionalmente e participar da construção
            de produtos e soluções de impacto.
          </p>
        </div>
        
        <div className="skills-section">
          <div className="skills-heading"><h3>Tecnologias & Ferramentas</h3><span>10 ferramentas</span></div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
