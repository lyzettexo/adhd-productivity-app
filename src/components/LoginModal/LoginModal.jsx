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
      <input type="email" placeholder="Email" />

      <input type="password" placeholder="Password" />
    </ModalWithForm>
  );
}

export default LoginModal;
