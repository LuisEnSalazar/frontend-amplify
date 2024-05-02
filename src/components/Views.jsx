import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Alumnos from "../pages/Alumnos";
import Metricas from "../pages/Metricas";
import Alumno from "../pages/Alumno";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/alumnos" element={<Alumnos />} />
      <Route path="/metricas" element={<Metricas />} />
      <Route path="/alumno/:id" element={<Alumno />} />
    </Routes>
  );
};

export default Views;
