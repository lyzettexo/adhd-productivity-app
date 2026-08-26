import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Focus Flow</p>

      <div className="footer__links">
        <Link className="footer__link" to="/">
          Home
        </Link>

        <Link className="footer__link" to="/resources">
          Resources
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
