import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./app.css";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Producto 1", price: 10.0, quantity: 1 },
    { id: 2, name: "Producto 2", price: 15.0, quantity: 2 },
  ]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <IconButton aria-label="cart" onClick={toggleModal}>
        <Badge badgeContent={items.length} color="secondary">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content animate">
            <div className="imgcontainer">
              <span onClick={toggleModal} className="close" title="Close Modal">
                &times;
              </span>
              <ShoppingCartIcon style={{ width: "200px", height: "95px", color: "black" }} />
            </div>

            <div className="container">
              <h3>Carrito de Compras</h3>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <h4>Total: ${totalAmount.toFixed(2)}</h4>
              <button className="checkout-btn">Pagar</button>
            </div>

            <div className="container" style={{ backgroundColor: "white" }}>
              <button
                type="button"
                onClick={toggleModal}
                className="cancelbtn"
                style={{ backgroundColor: "#333" }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;