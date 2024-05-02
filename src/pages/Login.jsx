import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Escudo from "../images/Escudo.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    await axios
      .post("http://18.190.68.50:8000/teacher/validate", formData)
      .then((res) => {
        if (res.data.message === "teacher validated successfully") {
          navigate("/alumnos");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="school-info-container">
          <div className="school-info">
            <img id="school-logo" alt="Escudo escolar" src={Escudo} />
            <h1 id="school-name">Escuela Metropolitana “La Luz”</h1>
          </div>
        </div>
        <div className="user-info-container">
          <form id="user-info-form" onSubmit={handleSubmit}>
            <div className="game-download">
              <a href="https://drive.google.com/drive/folders/1S6aLqEnMBUr_SqsiYefLIhlgd_E-S23Q?usp=sharing">
                Descargar juego
              </a>
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
            <div className="user-info-title-container">
              <h1>Inicia Sesión</h1>
            </div>
            <div className="user-info-input-container">
              <div className="user-info-input-spaced">
                <label for="email" className="input-label">
                  Correo Electrónico:
                </label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="login-input"
                />
                <br />
                <label for="password" className="input-label">
                  Contraseña:
                </label>
                <br />
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="login-input"
                />
                <br />
              </div>
            </div>
            <div className="user-info-submit-container">
              <button id="login-submit-button" type="submit">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
