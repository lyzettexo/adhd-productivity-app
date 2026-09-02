import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function RegisterModal({ isOpen, onClose, onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(event) {
    event.preventDefault();

    onRegister(values);
    resetForm();
  }

  return (
    <ModalWithForm
      title="Register"
      buttonText="Register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="name"
        value={values.name || ""}
        onChange={handleChange}
        minLength="2"
        required
      />

      {errors.name && <span>{errors.name}</span>}

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
        autoComplete="new-password"
        value={values.password || ""}
        onChange={handleChange}
        minLength="6"
        required
      />

      {errors.password && <span>{errors.password}</span>}
    </ModalWithForm>
  );
}

export default RegisterModal;
