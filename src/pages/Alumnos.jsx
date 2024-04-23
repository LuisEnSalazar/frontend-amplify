import Navbar from "../components/Navbar";
import "../styles/Alumnos.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Alumnos = () => {
  const [students, setStudents] = useState([]);

  const studentStack = [];

  const handleAdd = () => {};

  const fetchStudents = async () => {
    await axios
      .get("http://18.190.68.50:8000/student/get/all")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  /*
  for (let i = 0; i < bots.length; i += 3) {
    const botsInRow = bots.slice(i, i + 3);
    const hStack = (
      <Flex marginTop="20px" w="100%">
        {botsInRow.map((bot, index) => (
          <>
            <Etiqueta nombre={bot.name} status="Active" mostrarTexto={true} />
            {index === 2 ? <></> : <Spacer />}
          </>
        ))}
        {botsInRow.length === 2 && <Box w="323px" />}
      </Flex>
    );
    hStacks.push(hStack);
  }*/

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="alumnos-container">
      <Navbar />
      <div className="alumnos-list-container">
        <button id="alumnos-add" onClick={handleAdd}>
          Añadir alumno
          <span class="material-symbols-outlined add-icon">add</span>
        </button>
        <div className="alumnos-list">{studentStack}</div>
      </div>
    </div>
  );
};

export default Alumnos;
