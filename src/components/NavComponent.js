import React from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";
import "../style/nav.css";

const NavComponent = () => {
  return (
    <Router>
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/Administrador">Administrador</Link>
        </li>
        <li>
          <Link to="/Trabajador_1">Trabajador 1º</Link>
        </li>
        <li>
          <Link to="/Trabajador_2">Trabajador 2º</Link>
        </li>
      </ul>
    </nav>
    </Router>
  );
};

export default NavComponent;
