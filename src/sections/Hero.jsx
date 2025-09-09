import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope,
  FaCode,
  FaRocket 
} from "react-icons/fa";
import { 
  SiGmail,
  SiDiscord 
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Guilherme Ruas</h1>
        <div className="title-icons">
          <FaCode className="title-icon" />
          <FaRocket className="title-icon" />
        </div>
        <h2>Desenvolvedor Full Stack</h2>
        <p className="hero-description">
          Apaixonado por tecnologia e sempre em busca de novos desafios. 
          Criando soluções digitais inovadoras com código limpo e design moderno.
        </p>
        
        <div className="social-buttons">
          <a
            href="https://github.com/RuasCardi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <FaGithub /> GitHub
          </a>
          
          <a
            href="https://linkedin.com/in/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin /> LinkedIn
          </a>
          
          <a
            href="mailto:seu.email@gmail.com"
            className="social-btn email"
          >
            <FaEnvelope /> Email
          </a>
          
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}
