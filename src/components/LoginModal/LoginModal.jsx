import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function LoginModal({ isOpen, onClose, onLogin }) {
  const { values, handleChange, errors, resetForm } = useFormAndValidation();

  function handleSubmit(event) {
    event.preventDefault();

    onLogin(values);
    resetForm();
  }

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        value={values.email || ""}
        onChange={handleChange}
        required
      />

      {errors.email && <span>{errors.email}</span>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="current-password"
        value={values.password || ""}
        onChange={handleChange}
        minLength="6"
        required
      />

      {errors.password && <span>{errors.password}</span>}
    </ModalWithForm>
  );
}

export default LoginModal;
