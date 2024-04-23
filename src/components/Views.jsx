import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Alumnos from "../pages/Alumnos";
import Metricas from "../pages/Metricas";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/alumnos" element={<Alumnos />} />
      <Route path="/metricas" element={<Metricas />} />
    </Routes>
  );
};

export default Views;
