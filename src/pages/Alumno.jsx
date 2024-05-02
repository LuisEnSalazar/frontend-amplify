import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Alumno.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Alumno = () => {
  const { id } = useParams();
  const getStudentInfo = () => {};
  useEffect(() => {}, []);
  return (
    <div className="alumno-container">
      <Navbar />
      <div>
        <h1>Luis Enrique Salazar</h1>
      </div>
    </div>
  );
};

export default Alumno;
