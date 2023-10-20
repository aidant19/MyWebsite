import "./index.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;