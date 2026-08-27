import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onRegister }) {
  function handleSubmit(event) {
    event.preventDefault();

    onRegister();
  }

  return (
    <ModalWithForm
      title="Register"
      buttonText="Register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input type="text" placeholder="Name" />

      <input type="email" placeholder="Email" />

      <input type="password" placeholder="Password" />
    </ModalWithForm>
  );
}

export default RegisterModal;
