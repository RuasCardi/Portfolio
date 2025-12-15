import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaLinkedin, 
  FaGithub,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "cardinalliruas@gmail.com",
      link: "mailto:cardinalliruas@gmail.com",
      color: "#EA4335"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Vamos conversar!",
      link: "https://wa.me/5519982091708",
      color: "#25D366"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "guilherme-cardinalli",
      link: "https://www.linkedin.com/in/guilherme-cardinalli-b28634363/",
      color: "#0077B5"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "RuasCardi",
      link: "https://github.com/RuasCardi",
      color: "#333"
    }
  ];

  return (
    <section className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2>Vamos Trabalhar Juntos?</h2>
          <p>
            Estou sempre aberto a novos desafios e oportunidades. 
            Entre em contato comigo e vamos transformar suas ideias em realidade!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="additional-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Campinas-SP, Brasil</span>
              </div>
              <div className="info-item">
                <FaClock className="info-icon" />
                <span>Disponível para projetos</span>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-content">
              <h3>Pronto para começar?</h3>
              <p>
                Tenho experiência em desenvolvimento Full Stack e estou 
                sempre buscando novos desafios. Vamos criar algo incrível juntos!
              </p>
              <div className="cta-buttons">
                <a 
                  href="mailto:guilherme.ruas@email.com" 
                  className="cta-button primary"
                >
                  <FaEnvelope /> Enviar Email
                </a>
                <a 
                  href="https://wa.me/5519982091708" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button secondary"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
