import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/projects" aria-current="page">Proyectos</Link>
        <Link to="/git-ignore">Git Ignore</Link>
      </nav>
      <div className="container">
        <h1>PROYECTOS</h1>
        <div className="title">
          <h1>ARTISTA FREELANCER</h1>
        </div>
        <div className="content">
          <img className="image" src="/IMG/sasuke.jpg" alt="Sasuke" />
        </div>
        <div className="container">
          <div className="title">
            <h1>DESARROLLO EXPERIENCIAS MULTIMEDIA WEB</h1>
          </div>
          <div className="content">
            <h3>La mejor web de la historia</h3>
            <img className="image" src="/IMG/Pezweb.PNG" alt="Pezweb" />
            <h3>Formulario de registro completo</h3>
            <img className="image" src="/IMG/Formulario1.PNG" alt="Formulario" />
          </div>
        </div>
        <div className="container">
          <div className="title">
            <h1>TRABAJOS ANTERIORES</h1>
          </div>
          <div className="content">
            <div className="content">
              <a href="https://github.com/DavidCollazos11/Contador" className="subtitle">CONTADOR</a> <br />
              <a href="https://github.com/DavidCollazos11/cartas" className="subtitle">CARTAS</a> <br />
              <a href="https://github.com/DavidCollazos11/Tarea" className="subtitle">LA MEJOR WEB DE LA HISTORIA</a>   
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;

  