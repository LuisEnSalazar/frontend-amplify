import "../styles/LevelCard.css";

const LevelCard = ({ level }) => {
  const date = new Date(level.created_at);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  const formattedDate = day + "/" + month + "/" + year;
  return (
    <div
      className="level-card-container"
      style={
        level.finished
          ? { backgroundColor: "#9fde60" }
          : level.score > 0
          ? { backgroundColor: "#F5F29C" }
          : { backgroundColor: "#DBD9D9", opacity: "0.5" }
      }
    >
      <div class="level-top-info-container">
        <div class="level-name">{level.name}:</div>
        <div class="level-created-at">Inicio de nivel: {formattedDate}</div>
      </div>
      <div class="level-bottom-info-container">
        <p class="max-score">Puntaje máximo: {level.score}</p>
        <p>Último puntaje: {level.score}</p>
        <p>Número de intentos: {level.attempt}</p>
        <p className="level-status">
          {level.finished
            ? "Terminado"
            : level.score > 0
            ? "Incompleto"
            : "Sin comenzar"}
        </p>
      </div>
    </div>
  );
};

export default LevelCard;
