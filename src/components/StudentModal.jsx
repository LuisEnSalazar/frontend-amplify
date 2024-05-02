import "../styles/StudentModal.css";

const StudentModal = ({ handleSubmit, formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div class="modal fade" id="studentModal">
      <div class="modal-container">
        <div class="modal-content">
          <div class="modal-header">
            <div className="header-left">
              <h5 class="modal-title">Añadir Alumno</h5>
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
            <form onSubmit={handleSubmit}>
              <div class="modal-body">
                <p>Nombre:</p>
                <input
                  type="text"
                  className="modal-text-input"
                  id="student_name"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleInputChange}
                />
                <p>Número de lista:</p>
                <input
                  type="text"
                  className="modal-text-input"
                  id="num_list"
                  name="num_list"
                  value={formData.num_list}
                  onChange={handleInputChange}
                />
                <p>Género:</p>
                <select
                  id="gender"
                  className="modal-select"
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
  );
};

export default StudentModal;