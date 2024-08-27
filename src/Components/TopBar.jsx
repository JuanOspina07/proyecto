import React from 'react';
import ShoppingConfig from "./ShoopingConfig"
import Login from './Login';  
import "./app.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">JAKLOF</h1> {/* Añadir el título aquí */}
      </div>
      <div className="icon-container">
        <Login />
        <ShoppingConfig />
      </div>
    </div>
  );
}

export default TopBar;
