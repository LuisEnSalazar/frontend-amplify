import "../styles/Navbar.css";
import Escudo from "../images/Escudo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <NavLink to="/alumnos">
          <img id="navbar-logo" alt="Escudo escolar" src={Escudo} />
        </NavLink>
      </div>
      <div className="navbar-link-container">
        <NavLink to="/alumnos" className="alumnos-link-container">
          <span class="material-symbols-outlined link-icon">person</span>
          <p>ALUMNOS</p>
        </NavLink>
        <NavLink to="/metricas" className="alumnos-link-container">
          <span class="material-symbols-outlined link-icon">query_stats</span>
          <p>MÉTRICAS</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
