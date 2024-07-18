import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => (
  <nav className="navigation">
    <NavLink to="/pages/home" className="nav-link">
      Start
    </NavLink>
    {/*<NavLink to="/pages/showroom" className="nav-link">*/}
    {/*  Showroom*/}
    {/*</NavLink>*/}
    <NavLink to="/pages/blogpost" className="nav-link">
      Blog Post
    </NavLink>
    <NavLink to="/pages/userlist" className="nav-link">
      Show Users
    </NavLink>
  </nav>
);

export default Navigation;
