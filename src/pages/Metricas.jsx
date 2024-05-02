import { useEffect, useState } from "react";
import "../styles/Metricas.css";
import Navbar from "../components/Navbar";
import Tables from "../components/Tables";
import axios from "axios";

const Metricas = () => {
  const testTableHead = [
    "#",
    "Nombre",
    "Puntaje Total",
    "Intentos",
    "Tiempo Jugado",
  ];
  const testTableRows = [
    ["1", "Luis Enrique Salazar", "800pts", "10", "35min"],
    ["2", "Luis Enrique Salazar", "800pts", "10", "35min"],
    ["3", "Luis Enrique Salazar", "800pts", "10", "35min"],
    ["4", "Luis Enrique Salazar", "800pts", "10", "35min"],
    ["5", "Luis Enrique Salazar", "800pts", "10", "35min"],
  ];
  const [showing, setShowing] = useState("");
  const [metricaTitle, setMetricaTitle] = useState("");
  const [tableHead, setTableHead] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  const getTableData = (graph) => {
    axios
      .get(`http://localhost.3000/${graph}`)
      .then((res) => {
        setTableHead(res.data.tableHead);
        setTableRows(res.data.tableRows);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleInputChange = (event) => {
    const metricaOptionValue = event.target.value;
    setShowing(metricaOptionValue);
    setMetricaTitle(metricaOptionValue);

    if (metricaOptionValue === "Mayores Puntajes") {
      getTableData("mayoresPuntajes");
    } else if (metricaOptionValue === "Mayores Puntajes Hombres") {
      getTableData("mayoresPuntajesHombres");
    } else if (metricaOptionValue === "Mayores Puntajes Mujeres") {
      getTableData("mayoresPuntajesMujeres");
    } else if (metricaOptionValue === "Menores Puntajes") {
      getTableData("menoresPuntajes");
    } else if (metricaOptionValue === "Menores Puntajes Hombres") {
      getTableData("menoresPuntajesHombres");
    } else if (metricaOptionValue === "Menores Puntajes Mujeres") {
      getTableData("menoresPuntajesMujeres");
    } else if (metricaOptionValue === "Progreso") {
      getTableData("progreso");
    } else if (metricaOptionValue === "Puntajes Por Nivel") {
      getTableData("puntajesPorNivel");
    }
  };

  useEffect(() => {
    setMetricaTitle("Mayores Puntajes");
    //getTableData("mayoresPuntajes");
    setTableHead(testTableHead);
    setTableRows(testTableRows);
  }, []);

  return (
    <div className="metricas-container">
      <Navbar />
      <div className="select-container">
        <select
          id="metrica-option"
          value={showing}
          onChange={handleInputChange}
        >
          <option value="" disabled selected hidden>
            Selecciona
          </option>
          <option value="Mayores Puntajes">Mayores Puntajes</option>
          <option value="Mayores Puntajes Hombres">Mayores Puntajes H</option>
          <option value="Mayores Puntajes Mujeres">Mayores Puntajes M</option>
          <option value="Menores Puntajes">Menores Puntajes</option>
          <option value="Menores Puntajes Hombres">Menores Puntajes H</option>
          <option value="Menores Puntajes Mujeres">Menores Puntajes M</option>
          <option value="Progreso">Progreso</option>
          <option value="Puntajes Por Nivel">Puntajes Por Nivel</option>
          <option value="Progreso Global Promedio">
            Progreso Global Promedio
          </option>
        </select>
      </div>
      <div className="metrica-title-container">
        <h1>{metricaTitle}</h1>
      </div>
      {showing === "Progreso Global Promedio" ? null : (
        <Tables tableHead={tableHead} tableRows={tableRows} />
      )}
    </div>
  );
};

export default Metricas;
