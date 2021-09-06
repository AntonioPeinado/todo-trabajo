import React from 'react'
import "../style/header.css";

const Header = () => {
    return (
      <header className="header">
        <div>
          <h1 className="header-title">Todo-Job Control</h1>
          <button className="header-button"></button>
          <button className="header-button"></button>
          <button className="header-button"></button>
          <h2>
            <tt>Todo el control en un solo click</tt>
          </h2>
        </div>
      </header>
    );
}

export default Header
