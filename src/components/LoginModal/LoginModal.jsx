import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();

    onLogin();
  }

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input type="email" placeholder="Email" autoComplete="email" />

      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
    </ModalWithForm>
  );
}

export default LoginModal;
