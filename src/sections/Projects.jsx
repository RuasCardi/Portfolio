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
      title: "E-Commerce Moderno",
      description: "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e dashboard administrativo.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" }
      ],
      github: "https://github.com/RuasCardi",
      demo: "https://seu-projeto-demo.vercel.app",
      status: "Concluído"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos e filtros avançados.",
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
        { icon: <SiVite />, name: "Vite", color: "#646CFF" },
        { icon: <FaDatabase />, name: "API", color: "#FF6B6B" }
      ],
      github: "https://github.com/RuasCardi",
      demo: "https://seu-dashboard-demo.vercel.app",
      status: "Em Desenvolvimento"
    },
    {
      id: 3,
      title: "API RESTful",
      description: "API robusta com autenticação JWT, documentação Swagger e testes automatizados para aplicações web.",
      technologies: [
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiExpress />, name: "Express", color: "#000000" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" }
      ],
      github: "https://github.com/RuasCardi",
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
