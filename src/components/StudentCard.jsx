import { useState, useEffect } from "react";
import "../styles/StudentCard.css";
import { useNavigate } from "react-router-dom";
import { Popover } from "react-tiny-popover";
import StudentModal from "./StudentModalEdit";
import axios from "axios";

const StudentCard = ({ student }) => {
  const navigate = useNavigate();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: student.name,
    list_num: student.list_num,
    gender: student.gender,
    teacher_id: "LCzCXb8hjAJg89foUguzVh",
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
        <div className="student-card-logo">
          <span class="material-symbols-outlined student-logo-icon">
            account_circle
          </span>
        </div>
        <div className="student-name">Luis Enrique Salazar</div>
        <Popover
          isOpen={isPopoverOpen}
          positions={["right"]}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={
            <div className="popover-menu">
              <div className="popover-option" onClick={handleSee}>
                <span class="material-symbols-outlined">visibility</span>
                Ver
              </div>
              <div
                className="popover-option option-middle"
                data-toggle="modal"
                data-target="#studentModalEdit"
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
          <div
            className={"student-card-options"}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
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
