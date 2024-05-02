import { useState } from "react";
import "../styles/StudentCard.css";
import { useNavigate } from "react-router-dom";
import { Popover } from "react-tiny-popover";
import axios from "axios";

const StudentCard = ({ student }) => {
  const navigate = useNavigate();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [formData, setFormData] = useState({
    student_name: student.name,
    num_list: student.num_list,
    gender: student.gender,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleSee = () => {
    navigate(`/alumno/${student.id}`);
  };

  const handleDelete = () => {};
  return (
    <div className="student-card-container">
      <div className="student-card">
        <span class="material-symbols-outlined">account_circle</span>
        Luis Enrique Salazar
        <Popover
          isOpen={isPopoverOpen}
          positions={["right"]} // preferred positions by priority
          content={
            <div className="popover-menu">
              <div className="popover-option" onClick={handleSee}>
                <span class="material-symbols-outlined">visibility</span>
                Ver
              </div>
              <div
                className="popover-option option-middle"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <span class="material-symbols-outlined">edit</span>
                Editar
              </div>
              <div className="popover-option" onClick={handleDelete}>
                <span class="material-symbols-outlined">delete</span>
                Borrar
              </div>
            </div>
          }
        >
          <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
            <span class="material-symbols-outlined options-menu">
              more_vert
            </span>
          </div>
        </Popover>
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
                    <option value="Selecciona">Selecciona</option>
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

export default StudentCard;
