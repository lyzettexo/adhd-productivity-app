import { useEffect } from "react";

import "./ModalWithForm.css";

function ModalWithForm({
  title,
  buttonText,
  isOpen,
  onClose,
  children,
  onSubmit,
}) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close" type="button" onClick={onClose}>
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
