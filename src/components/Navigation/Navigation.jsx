import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick, onRegisterClick }) {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Home
      </NavLink>

      <NavLink className="navigation__link" to="/resources">
        Resources
      </NavLink>

      <button
        className="navigation__button"
        type="button"
        onClick={onLoginClick}
      >
        Log In
      </button>

      <button
        className="navigation__button"
        type="button"
        onClick={onRegisterClick}
      >
        Register
      </button>
    </nav>
  );
}

export default Navigation;
