import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  buttonText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal name="form" onClose={onClose}>
      <h2 className="modal__title">{title}</h2>

      <form className="modal__form" onSubmit={onSubmit}>
        {children}

        <button className="modal__submit" type="submit">
          {buttonText}
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
