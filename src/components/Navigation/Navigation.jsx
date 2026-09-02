import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({
  isLoggedIn,
  currentUser,
  onLoginClick,
  onRegisterClick,
  onLogout,
}) {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Home
      </NavLink>

      <NavLink className="navigation__link" to="/resources">
        Resources
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink className="navigation__link" to="/profile">
            Profile
          </NavLink>
          {currentUser && (
            <span className="navigation__user">
              Hi, {currentUser.name || currentUser.email}
            </span>
          )}

          <button
            className="navigation__button"
            type="button"
            onClick={onLogout}
          >
            Log Out
          </button>
        </>
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
