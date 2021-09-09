import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "../pages/Login";
import Administrador from "../pages/Administrador";
import Trabajador_1 from "../pages/Trabajador_1";
import Trabajador_2 from "../pages/Trabajador_2";
import "../style/rutas.css";

const Rutas = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link " to="/Administrador">
                Administrador
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Trabajador_1">
                Trabajador 1º
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Trabajador_2">
                Trabajador 2º
              </Link>
            </li>
          </ul>
          <div className="col"></div>
          <button className="btn btn-danger  ">Cerrar sesión</button>
        </nav>

        <Switch>
          <Route exact path="/" component="Login">
            <Login />
          </Route>
          <Route exact path="/Administrador" component={Administrador}></Route>
          <Route exact path="/Trabajador_1" component={Trabajador_1}></Route>
          <Route exact path="/Trabajador_2" component={Trabajador_2}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Rutas;
