import "../styles/LevelCard.css";

const LevelCard = ({ level }) => {
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
        <div class="level-created-at">Inicio de nivel: {level.created_at}</div>
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
