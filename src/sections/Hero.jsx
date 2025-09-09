import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Guilherme Ruas</h1>
      <h2>Desenvolvedor Full Stack</h2>
      <div className="social-buttons">
        <a
          href="https://github.com/RuasCardi"
          target="_blank"
          className="github"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://instagram.com/seu_usuario"
          target="_blank"
          className="instagram"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://wa.me/55SEUNUMERO"
          target="_blank"
          className="whatsapp"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </section>
  );
}
