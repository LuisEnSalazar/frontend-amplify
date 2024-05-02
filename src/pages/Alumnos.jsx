import Navbar from "../components/Navbar";
import "../styles/Alumnos.css";
import axios from "axios";
import StudentCard from "../components/StudentCard";
import StudentModal from "../components/StudentModalAdd";
import { useEffect, useState } from "react";

const Alumnos = () => {
  const testStudent = {
    id: "12",
    list_num: 1,
    name: "Luis Enrique Salazar",
    gender: "H",
  };

  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    list_num: "",
    gender: "",
  });

  const studentStack = [];

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append("name", formData.name);
    data.append("list_num", formData.list_num);
    data.append("gender", formData.gender);
    data.append("teacher_id", "LCzCXb8hjAJg89foUguzVh");
    console.log("Form submitted:", formData);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://18.190.68.50:8000/student/create",
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    formData.name = "";
    formData.list_num = "";
    formData.gender = "";

    fetchStudents();
  };

  const fetchStudents = async () => {
    await axios
      .get("http://18.190.68.50:8000/student/get/all")
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  for (let i = 0; i < students.length; i += 3) {
    const studentsInRow = students.slice(i, i + 3);
    const hStack = (
      <div className="student-container">
        {studentsInRow.map((student) => (
          <StudentCard student={student} fetchStudents={fetchStudents} />
        ))}
      </div>
    );
    studentStack.push(hStack);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="alumnos-container">
      <Navbar />
      <div className="alumnos-list-container">
        <div
          id="alumnos-add"
          data-toggle="modal"
          data-target="#studentModalAdd"
        >
          Añadir alumno
          <span class="material-symbols-outlined add-icon">add</span>
        </div>
        <div className="alumnos-list">{studentStack}</div>
      </div>
      <StudentModal
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default Alumnos;
