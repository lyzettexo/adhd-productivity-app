import { useEffect } from "react";
import "./StartModal.css";

function StartModal({ task, message, onClose }) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="start-modal" onClick={onClose}>
      <div
        className="start-modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="start-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2>{message}</h2>

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
