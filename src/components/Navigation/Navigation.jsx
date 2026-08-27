import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginClick, onRegisterClick, onLogout }) {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Home
      </NavLink>

      <NavLink className="navigation__link" to="/resources">
        Resources
      </NavLink>

      {isLoggedIn ? (
        <button className="navigation__button" type="button" onClick={onLogout}>
          Log Out
        </button>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
}

export default Navigation;
