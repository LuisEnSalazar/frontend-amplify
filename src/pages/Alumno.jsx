import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Alumno.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import LevelCard from "../components/LevelCard";

const Alumno = () => {
  var date = new Date(); // Note: JavaScript months are zero-based (0 for January, 1 for February, etc.), so 3 represents April

  // Get the day, month, and year
  var day = date.getDate();
  var month = date.getMonth() + 1; // Adding 1 because months are zero-based
  var year = date.getFullYear();

  // Ensure leading zero for single-digit day and month
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  var formattedDate = day + "/" + month + "/" + year;

  const testLevel = {
    id: 1,
    student_id: 1,
    name: "Nivel 1",
    attempt: 5,
    score: 0,
    finished: false,
    created_at: formattedDate,
  };

  const { id } = useParams();
  const [student, setStudent] = useState([]);
  const playedLevels = [];
  const notPlayedLevels = [];
  const getStudentInfo = () => {};
  /*student.levels.map((level) => {
    if (level.finished) {
      playedLevels.push(<LevelCard level={level} />);
    } else {
      notPlayedLevels.push(<LevelCard level={level} />);
    }
  });*/
  useEffect(() => {}, []);
  return (
    <div className="alumno-container">
      <Navbar />
      <div className="alumno-info-container">
        <h1>Luis Enrique Salazar</h1>
        <div className="alumno-game-info-container">
          <p>Número de lista: 17</p>
          <p>Género: H</p>
          <p>Puntaje total: 100pts</p>
          <p>Tiempo de juego: 16hrs</p>
        </div>
        <h2>Niveles jugados:</h2>
        {/*playedLevels*/}
        <LevelCard level={testLevel} />
        <h2>Niveles no jugados:</h2>
        {notPlayedLevels}
      </div>
    </div>
  );
};

export default Alumno;
