const Home = () => {
  return (
    <main>
      <nav>
        <a href="/">Inicio</a>
        <a href="/projects">Proyectos</a>
        <a href="/git-ignore">Git Ignore</a>
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
            <h1>HABILIDADES</h1>
          </div>
          <div className="content">
            <h3>Buen manejo del inglés</h3>
            <h3>Manejo de la suite de Adobe</h3>
            <h3>Creatividad en diseño</h3>
            <h3>Dibujo físico y digital</h3>
            <h3>Producción audiovisual</h3>
            <h3>Manejo de Blender</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
