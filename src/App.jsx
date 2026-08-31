import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">GR<span>.</span></a>
        <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a></nav>
        <a className="header-status" href="#contato"><i />Disponível</a>
      </header>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
