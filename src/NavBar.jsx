import "./index.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/MyWebsite">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/MyWebsite/projects">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;