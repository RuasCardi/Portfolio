import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope,
  FaArrowDown,
  FaExternalLinkAlt
} from "react-icons/fa";
import { 
  SiGmail,
  SiDiscord 
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-index">01 / INÍCIO</div>
      <div className="hero-content">
        <p className="eyebrow">PORTFÓLIO — 2026</p>
        <h1>Guilherme Ruas</h1>
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
            <FaGithub /> GitHub <FaExternalLinkAlt className="link-arrow" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/guilherme-cardinalli-b28634363/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin /> LinkedIn <FaExternalLinkAlt className="link-arrow" />
          </a>
          
          <a
            href="mailto:cardinalliruas@gmail.com"
            className="social-btn email"
          >
            <FaEnvelope /> Email <FaExternalLinkAlt className="link-arrow" />
          </a>
          
          <a
            href="https://wa.me/5519982091708"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
          >
            <FaWhatsapp /> WhatsApp <FaExternalLinkAlt className="link-arrow" />
          </a>
        </div>
        
      </div>
      <a className="scroll-indicator" href="#sobre"><span>ROLE PARA EXPLORAR</span><FaArrowDown /></a>
    </section>
  );
}
