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
      <input type="text" placeholder="Name" autoComplete="name" />

      <input type="email" placeholder="Email" autoComplete="email" />

      <input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
