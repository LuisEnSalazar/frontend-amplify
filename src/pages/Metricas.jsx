import { useEffect, useState } from "react";
import "../styles/Metricas.css";
import Navbar from "../components/Navbar";
import Tables from "../components/Tables";
import axios from "axios";

const Metricas = () => {
  const testGeneral = "65%";
  const testMale = "30%";
  const testFemale = "35%";

  const [showing, setShowing] = useState("");
  const [metricaTitle, setMetricaTitle] = useState("");
  const [tableHead, setTableHead] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [generalPercentage, setGeneralPercentage] = useState("");
  const [malePercentage, setMalePercentage] = useState("");
  const [femalePercentage, setFemalePercentage] = useState("");

  const getTableData = (graph) => {
    axios
      .get(`http://18.190.68.50:8000/metric/${graph}`)
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
    } else if (metricaOptionValue === "Progreso Global Promedio") {
      axios
        .get("http://localhost.3000/progresoGlobalPromedio")
        .then((res) => {
          setGeneralPercentage(`${res.data.general}%`);
          setMalePercentage(`${res.data.male}%`);
          setFemalePercentage(`${res.data.female}%`);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    setMetricaTitle("Mayores Puntajes");
    getTableData("mayoresPuntajes");
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
      {showing === "Progreso Global Promedio" ? (
        <div className="percentage-container">
          <div className="general-percentage-container">
            <div className="general-text-container">
              <p className="general-percentage">{generalPercentage}</p>
              <p className="general-description">General</p>
            </div>
          </div>
          <div className="male-female-percentage-container">
            <div>
              <div className="male-text-container">
                <p className="male-female-percentage">{malePercentage}</p>
                <p className="male-female-description">Hombres</p>
              </div>
              <div className="female-text-container">
                <p className="male-female-percentage">{femalePercentage}</p>
                <p className="male-female-description">Mujeres</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Tables tableHead={tableHead} tableRows={tableRows} />
      )}
    </div>
  );
};

export default Metricas;
