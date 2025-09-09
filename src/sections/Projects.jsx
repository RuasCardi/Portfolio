export default function Projects() {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Projeto 1</h3>
          <p>Descrição breve do projeto, tecnologias usadas, etc.</p>
          <a href="https://github.com/RuasCardi" target="_blank">
            Ver no GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Projeto 2</h3>
          <p>Outro projeto legal com foco em frontend/backend.</p>
          <a href="https://github.com/RuasCardi" target="_blank">
            Ver no GitHub
          </a>
        </div>
        {/* Adicione mais projetos conforme quiser */}
      </div>
    </section>
  );
}
