import "../styles/StudentModal.css";

const StudentModal = ({ name }) => {
  console.log(name);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  };
  const handleSubmit = () => {};
  return (
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
            <form onSubmit={handleSubmit}>
              <div class="modal-body">
                <p>Nombre:</p>
                <input
                  type="text"
                  className="modal-text-input"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
                <p>Número de lista:</p>
                <input
                  type="text"
                  className="modal-text-input"
                  id="list_num"
                  name="list_num"
                  value={"hello"}
                  onChange={handleInputChange}
                />
                <p>Género:</p>
                <select
                  id="gender"
                  className="modal-select"
                  name="gender"
                  value={"hello"}
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
