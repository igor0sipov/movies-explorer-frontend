import "./Header.css";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn, location }) => {
  const routes = ["/signin", "/signup"];

  return (
    <header
      className={`header header_sized ${
        location === "/" && "header_type_promo"
      } ${routes.some((route) => route === location) && "header_type_auth"}`}
    >
      <NavLink to="/" className="header__logo focused-box hovered"></NavLink>
      <nav
        className={`header__auth ${loggedIn && "header__auth_hidden"} ${
          routes.some((route) => route === location) && "header__auth_hidden"
        }`}
      >
        <NavLink className="header__signup focused-text hovered" to="/signup">
          Регистрация
        </NavLink>
        <NavLink className="header__signin focused-text hovered" to="/signin">
          Вход
        </NavLink>
      </nav>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
};

export default Header;
