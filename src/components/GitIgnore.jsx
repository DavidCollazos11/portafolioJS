const GitIgnore = () => {
    return (
      <main>
        <nav>
          <a href="/">Inicio</a>
          <a href="/projects">Proyectos</a>
          <a href="/git-ignore" aria-current="page">Git Ignore</a>
        </nav>
        <div className="container">
          <div className="title">
            <h1>GIT IGNORE TUTORIAL HD</h1>
          </div>
          <div className="content">
            <p>
              Un archivo .gitignore es esencial en cualquier proyecto de Git porque te permite especificar qué archivos o directorios deseas que Git ignore, es decir, que no rastree ni incluya en los commits. Aquí hay un tutorial muy básico para empezar:
            </p>
            {/* El contenido restante se puede agregar aquí */}
          </div>
        </div>
      </main>
    );
  };
  
  export default GitIgnore;
  