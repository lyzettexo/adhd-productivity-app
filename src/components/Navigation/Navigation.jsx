import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Home
      </NavLink>

      <NavLink className="navigation__link" to="/resources">
        Resources
      </NavLink>
    </nav>
  );
}

export default Navigation;
