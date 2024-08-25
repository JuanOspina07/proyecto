import React from 'react';
import ShoppingConfig from "./ShoopingConfig"
import Login from './Login';  
import "./app.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="icon-container">
        <Login />
        <ShoppingConfig />
      </div>
    </div>
  );
}

export default TopBar;
