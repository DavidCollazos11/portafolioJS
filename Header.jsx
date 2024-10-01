import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css';

const Header = () => {
  return (
    <nav>
      <Link to="/" aria-current="page">Inicio</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/gitignore">Git Ignore</Link>
    </nav>
  );
};

export default Header;
