import React from "react";
import "../style/nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <a className="nav-ruta" href="#">
          <li className="nav-list">Home</li>
        </a>
        <a className="nav-ruta" href="#">
          <li className="nav-list">Administrador</li>
        </a>
        <a className="nav-ruta" href="#">
          <li className="nav-list">Trabajador 1º</li>
        </a>
        <a className="nav-ruta" href="#">
          <li className="nav-list">Trabajador 2º</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
