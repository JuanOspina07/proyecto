import React, { useState } from "react";
import "./app.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div onClick={toggleModal} style={{ cursor: 'pointer', display: 'inline-block' }}>
        <AccountCircleIcon style={{ fontSize: 30, color: 'white', marginRight: '20px' }} />
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content animate">
            <div className="imgcontainer">
              <span onClick={toggleModal} className="close" title="Close Modal">
                &times;
              </span>
              <AccountCircleIcon style={{ width: "200px", height: "95px", color: "black" }} />
            </div>

            <div className="container">
              <label htmlFor="uname">
                <b>Nombre de Usuario</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label htmlFor="psw">
                <b>Contraseña</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <div className="container" style={{fontStyle: "italic" , backgroundColor: "black", borderRadius: "50px", width: "45%" }}>
                <button type="submit">Iniciar Sesión</button>
              </div>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={true}
                  name="remember"
                />{" "}
                Recordar Contraseña
              </label>
            </div>

            <div className="container" style={{ backgroundColor: "withe" }}>
              <button
                type="button"
                onClick={toggleModal}
                className="cancelbtn" style={{backgroundColor: "#333"}}
              >
                Cancelar
              </button>
              <span className="psw" style={{padding: "10px"}}>
                 <a href="#">Olvido su contraseña?</a>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;