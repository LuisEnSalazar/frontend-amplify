import { useState } from "react";
import "../styles/Metricas.css";
import Navbar from "../components/Navbar";
import Tables from "../components/Tables";

const Metricas = () => {
  const [showing, setShowing] = useState("");
  const handleInputChange = (event) => {
    setShowing(event.target.value);
  };
  return (
    <div className="metricas-container">
      <Navbar />
      <div className="select-container">
        <select
          id="metrica-option"
          value={showing}
          onChange={handleInputChange}
        >
          <option value="Selecciona">Selecciona</option>
          <option value="H">H</option>
          <option value="F">F</option>
        </select>
      </div>
      <Tables />
    </div>
  );
};

export default Metricas;
