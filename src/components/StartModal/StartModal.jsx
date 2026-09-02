import Modal from "../Modal/Modal";
import "./StartModal.css";

function StartModal({ task, message, onClose }) {
  return (
    <Modal name="start" onClose={onClose}>
      <div className="start-modal__content">
        <h2>{message}</h2>

        <p className="start-modal__label">Start here:</p>

        <p className="start-modal__first-step">{task.firstStep}</p>

        <button className="start-modal__button" type="button" onClick={onClose}>
          Got it
        </button>
      </div>
    </Modal>
  );
}

export default StartModal;
