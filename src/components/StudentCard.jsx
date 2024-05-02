import { useState } from "react";
import "../styles/StudentCard.css";
import { useNavigate } from "react-router-dom";
import { Popover } from "react-tiny-popover";
import axios from "axios";

const StudentCard = ({ student, fetchStudents }) => {
  const navigate = useNavigate();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  };

  const handleSee = () => {
    navigate(`/alumno/${student.id}`);
  };

  const handleDelete = () => {
    let data = new FormData();
    data.append("id", student.id);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://18.190.68.50:8000/student/delete",
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

    fetchStudents();

    const handleSubmit = () => {};
  };
  return (
    <div className="student-card-container">
      <div className="student-card">
        <div className="student-card-logo">
          <span class="material-symbols-outlined student-logo-icon">
            account_circle
          </span>
        </div>
        <div className="student-name">{student.name}</div>
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
      <div class="modal fade" id="studentModalEdit">
        <div class="modal-container">
          <div class="modal-content">
            <div class="modal-header">
              <div className="header-left">
                <h5 class="modal-title">Editar Alumno</h5>
              </div>
              <div className="header-right">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div>
              <form>
                <div class="modal-body">
                  <p>Nombre:</p>
                  <input
                    type="text"
                    className="modal-text-input"
                    id="name"
                    name="name"
                    value={student.name}
                    onChange={handleInputChange}
                  />
                  <p>Número de lista:</p>
                  <input
                    type="text"
                    className="modal-text-input"
                    id="list_num"
                    name="list_num"
                    value={1}
                    onChange={handleInputChange}
                  />
                  <p>Género:</p>
                  <select
                    id="gender"
                    className="modal-select"
                    name="gender"
                    value={"H"}
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

export default StudentCard;
