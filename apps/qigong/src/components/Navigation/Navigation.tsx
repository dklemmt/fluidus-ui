import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => (
  <nav className="navigation">
    <NavLink to="/pages/Home" className="qigong-link">
      Start
    </NavLink>
    <NavLink to="/pages/About" className="qigong-link">
      Über mich
    </NavLink>
    {/* <NavLink to="/pages/Contact" className="qigong-link"> */}
    {/*  Kontakt */}
    {/* </NavLink> */}
  </nav>
);

export default Navigation;
