import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Game Freak</div>
      <nav className="nav">
        <a href="#" className="nav-link">Inicio</a>
        <a href="#productos" className="nav-link">Productos</a>
        <a href="#footer" className="nav-link">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;