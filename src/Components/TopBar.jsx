import React from "react";
import ShoppingConfig from "./ShoopingConfig";
import Login from "./Login";
import "./app.css";
import DropListProducts from "./DropListProducts";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">J A K L O F</h1>
      </div>
      <div className="icon-container">
        <div className="container-list">
          <DropListProducts />
        </div>
        <Login />
        <ShoppingConfig />
      </div>
    </div>
  );
};

export default TopBar;
