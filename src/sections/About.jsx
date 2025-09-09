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
    <section className="about">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Sou <strong>Guilherme Ruas</strong>, desenvolvedor Full Stack apaixonado por tecnologia
            e soluções criativas. Tenho experiência em desenvolvimento web moderno,
            sempre buscando as melhores práticas e tecnologias mais atuais do mercado.
          </p>
          <p>
            Minha missão é criar experiências digitais incríveis, combinando design 
            elegante com código limpo e performático. Acredito que a tecnologia deve 
            ser acessível e resolver problemas reais das pessoas.
          </p>
        </div>
        
        <div className="skills-section">
          <h3>Tecnologias & Ferramentas</h3>
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
