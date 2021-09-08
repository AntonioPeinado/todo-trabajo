import React from 'react'

function LoginComponent() {
    return (
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          <form className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="escribe tu email"
            />

            <input
              className="form-control mt-4"
              type="password"
              placeholder="escribe tu password"
            />
            <input
              className="btn btn-dark btn-block mt-4"
              type="submit"
              value="Login Usuario  "
            />
          </form>
        </div>
        <div className="col"></div>
      </div>
    );
}

export default LoginComponent
