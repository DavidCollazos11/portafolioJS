import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <nav>
        <Link to="/git-ignore" aria-current="page">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/git-ignore">Git Ignore</Link>
      </nav>
      <div className="container">
        <div className="title">
          <h1>PORTAFOLIO</h1>
          <h3>David Collazos Tafur</h3>
        </div>
        <div className="content">
          <p>
            Egresado del Instituto Tecnico Educativo Industrial Antonio Jose
            Camacho con técnico en diseño gráfico y soluciones informáticas.
          </p>
        </div>
        <div className="container">
          <div className="title">
            <h1>HABILIDADES DURAS</h1>
          </div>
          <div className="content">
            <h3>Manejo de la suite de Adobe</h3>
            <h3>Creatividad en diseño</h3>
            <h3>Dibujo físico y digital</h3>
            <h3>Producción audiovisual</h3>
            <h3>Manejo de Blender</h3>
          </div>
        </div>
        <div className="container">
          <div className="title">
            <h1>HABILIDADES BLANDAS</h1>
          </div>
          <div className="content">
            <h3>Buen manejo del inglés</h3>
            <h3>Diseño páginas web</h3>
            <h3>Arquitecturas de hardware</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title">
          <h1>REDES SOCIALES</h1>
        </div>
        <div className="content">
          <a href="https://www.instagram.com/david_collazos_dou/" className="subtitle">Instagram</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
