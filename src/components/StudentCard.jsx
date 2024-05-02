import { useState } from "react";
import "../styles/StudentCard.css";
import { useNavigate } from "react-router-dom";
import { Popover } from "react-tiny-popover";
import StudentModal from "./StudentModal";
import axios from "axios";

const StudentCard = ({ student }) => {
  const navigate = useNavigate();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [formData, setFormData] = useState({
    student_name: student.name,
    num_list: student.num_list,
    gender: student.gender,
  });

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
          positions={["right"]}
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
      <StudentModal
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default StudentCard;
