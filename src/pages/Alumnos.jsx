import Navbar from "../components/Navbar";
import "../styles/Alumnos.css";
import axios from "axios";
import StudentCard from "../components/StudentCard";
import StudentModal from "../components/StudentModal";
import { useEffect, useState } from "react";

const Alumnos = () => {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    student_name: "",
    num_list: "",
    gender: "",
  });

  const studentStack = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional actions here before submitting the form
    // For example, sending data to the server or validating the form
    console.log("Form submitted:", formData);
    fetchStudents();
  };

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

  for (let i = 0; i < students.length; i += 3) {
    const studentsInRow = students.slice(i, i + 3);
    const hStack = (
      <div className="student-container">
        {studentsInRow.map((student) => (
          <StudentCard student={student} />
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
        <div id="alumnos-add" data-toggle="modal" data-target="#studentModal">
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
