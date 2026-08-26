import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="header__home-link" to="/">
        <h1 className="header__title">Focus Flow</h1>
      </Link>
      <p className="header__subtitle">Start small. Build Momentum.</p>

      <Navigation />
    </header>
  );
}

export default Header;
