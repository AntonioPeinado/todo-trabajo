import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Rutas() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component="Login" />
            <Route exact path="/Administrador" component="Administrador" />
            <Route exact path="/Trabajador_1" component="Trabajador_1" />
            <Route exact path="/Trabajador_2" component="Trabajador_2" />
          </Switch>
        </Router>
      </div>
    );
}

export default Rutas
