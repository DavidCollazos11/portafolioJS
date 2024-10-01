import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" aria-current="page">Inicio</Link>
      <Link to="/projects">Proyectos</Link>
      <Link to="/git-ignore">Git Ignore</Link>
    </nav>
  );
};

export default NavBar;


