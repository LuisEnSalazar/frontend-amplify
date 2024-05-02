import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Alumno.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import LevelCard from "../components/LevelCard";

const Alumno = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({});
  const [levels, setLevels] = useState([]);

  const playedLevels = [];
  const notPlayedLevels = [];

  const getStudentInfo = () => {
    let data = new FormData();
    data.append("id", id);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://18.190.68.50:8000/student/get/one",
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLevelInfo = () => {
    let data = new FormData();
    data.append("student_id", id);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://18.190.68.50:8000/level/get/all",
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setLevels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  levels.map((level, index) => {
    if (!level.finished) {
      if (level.score > 0) {
        playedLevels.push(<LevelCard key={index} level={level} />);
      } else {
        notPlayedLevels.push(<LevelCard key={index} level={level} />);
      }
    } else {
      playedLevels.push(<LevelCard key={index} level={level} />);
    }
  });

  useEffect(() => {
    getStudentInfo();
    getLevelInfo();
  }, []);
  return (
    <div className="alumno-container">
      <Navbar />
      <div className="alumno-info-container">
        <h1>{student.name}</h1>
        <div className="alumno-game-info-container">
          <p>Número de lista: {student.list_num}</p>
          <p>Género: {student.gender}</p>
          <p>Puntaje total: {student.total_score}pts</p>
          <p>Tiempo de juego: {student.total_time}min</p>
        </div>
        <h2>Niveles jugados:</h2>
        {playedLevels}
        <h2>Niveles no jugados:</h2>
        {notPlayedLevels}
      </div>
    </div>
  );
};

export default Alumno;
