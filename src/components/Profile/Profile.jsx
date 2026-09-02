import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./Profile.css";

function Profile({ currentUser, onUpdateUser }) {
  const { values, handleChange, errors, resetForm } = useFormAndValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm({
        name: currentUser.name || "",
        email: currentUser.email || "",
      });
    }
  }, [currentUser, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      ...currentUser,
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <h2 className="profile__title">My Profile</h2>

      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__label">
          Name
          <input
            className="profile__input"
            type="text"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            minLength="2"
            required
          />
        </label>

        {errors.name && <span className="profile__error">{errors.name}</span>}

        <label className="profile__label">
          Email
          <input
            className="profile__input"
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
        </label>

        {errors.email && <span className="profile__error">{errors.email}</span>}

        <button className="profile__button" type="submit">
          Save Changes
        </button>
      </form>
    </section>
  );
}

export default Profile;
