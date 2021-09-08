import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "../pages/Login";
import Administrador from "../pages/Administrador";
import Trabajador_1 from "../pages/Trabajador_1";
import Trabajador_2 from "../pages/Trabajador_2";


const Rutas = () => {
    return (
      <div>
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

          <Switch>
            <Route exact path="/" component="Login">
              
              <Login />
            </Route>
            <Route exact path="/Administrador" component="Administrador">
              <Administrador />
            </Route>
            <Route exact path="/Trabajador_1" component="Trabajador_1">
              <Trabajador_1 />
            </Route>
            <Route exact path="/Trabajador_2" component="Trabajador_2">
              <Trabajador_2 />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default Rutas