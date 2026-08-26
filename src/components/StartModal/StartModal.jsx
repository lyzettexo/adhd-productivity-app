import "./StartModal.css";

function StartModal({ task, onClose }) {
  return (
    <div className="start-modal" onClick={onClose}>
      <div
        className="start-modal__content"
        onClick={(event) => event.stopPropagation}
      >
        <h2>Nice! You started!</h2>
        <p className="start-modal__label">Start here:</p>

        <p className="start-modal__first-step">{task.firstStep}</p>

        <button className="start-modal__button" type="button" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}

export default StartModal;
