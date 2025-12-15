import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs,
  FaJs,
  FaDatabase
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "F1 App",
      description: "Aplicação interativa sobre Fórmula 1 com informações em tempo real, estatísticas e acompanhamento de corridas.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" },
        { icon: <FaDatabase />, name: "API", color: "#FF6B6B" }
      ],
      github: "https://github.com/RuasCardi/F1app",
      demo: null,
      status: "Concluído"
    },
    {
      id: 2,
      title: "Solar",
      description: "Projeto sobre energia solar com informações sobre sustentabilidade, cálculos de eficiência e visualizações interativas.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" }
      ],
      github: "https://github.com/RuasCardi/Solar",
      demo: null,
      status: "Concluído"
    },
    {
      id: 3,
      title: "Markup",
      description: "Editor de texto em Markdown com preview em tempo real, suporte a sintaxe destacada e exportação de documentos.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" }
      ],
      github: "https://github.com/RuasCardi/markup",
      demo: null,
      status: "Concluído"
    },
    {
      id: 4,
      title: "Hamburgueria Landing",
      description: "Landing page moderna para hamburgueria com design atraente, menu interativo e seção de pedidos online.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" }
      ],
      github: "https://github.com/RuasCardi/hamburgueria-landing",
      demo: null,
      status: "Concluído"
    },
    {
      id: 5,
      title: "Emotion",
      description: "Aplicação para análise e reconhecimento de emoções com interface intuitiva e visualizações dinâmicas.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" },
        { icon: <FaDatabase />, name: "API", color: "#FF6B6B" }
      ],
      github: "https://github.com/RuasCardi/Emotion",
      demo: null,
      status: "Concluído"
    },
    {
      id: 6,
      title: "Polaroid Frame",
      description: "Ferramenta criativa para aplicar efeitos de moldura estilo polaroid em imagens com filtros personalizáveis.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" }
      ],
      github: "https://github.com/RuasCardi/polaroid-frame",
      demo: null,
      status: "Concluído"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Concluído":
        return "#4CAF50";
      case "Em Desenvolvimento":
        return "#FF9800";
      default:
        return "#9C27B0";
    }
  };

  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <p className="projects-subtitle">
        Alguns dos projetos que desenvolvi para demonstrar minhas habilidades e paixão por tecnologia
      </p>
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div 
                className="project-status"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status}
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              <h4>Tecnologias:</h4>
              <div className="tech-icons">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="tech-icon"
                    style={{ color: tech.color }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <FaGithub /> GitHub
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
