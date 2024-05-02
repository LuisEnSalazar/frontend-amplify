import Navbar from "../components/Navbar";
import "../styles/Alumnos.css";
import axios from "axios";
import StudentCard from "../components/StudentCard";
import { useEffect, useState } from "react";

const Alumnos = () => {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    student_name: "",
    num_list: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const studentStack = [];

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional actions here before submitting the form
    // For example, sending data to the server or validating the form
    console.log("Form submitted:", formData);
    fetchStudents();
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
        <button
          id="alumnos-add"
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Añadir alumno
          <span class="material-symbols-outlined add-icon">add</span>
        </button>
        <div className="alumnos-list">{studentStack}</div>
      </div>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Añadir Alumno
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div class="modal-body">
                  <label htmlFor="student_name">Nombre:</label>
                  <input
                    type="text"
                    id="student_name"
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label htmlFor="num_list">Número de lista:</label>
                  <input
                    type="text"
                    id="num_list"
                    name="num_list"
                    value={formData.num_list}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label htmlFor="gender">Género:</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected hidden>
                      Selecciona
                    </option>
                    <option value="H">H</option>
                    <option value="F">F</option>
                  </select>
                </div>
                <div class="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumnos;
