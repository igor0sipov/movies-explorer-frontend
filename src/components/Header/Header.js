import "./Header.css";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn, location }) => {
  const routes = ["/signin", "/signup"];

  return (
    <header
      className={`header section ${location === "/" && "header_type_promo"}`}
    >
      <div
        className={`header__sizer ${
          routes.some((route) => route === location) &&
          "header__sizer_type_auth"
        }`}
      >
        <div
          className={`header__container ${
            routes.some((route) => route === location) &&
            "header__container_type_auth"
          }`}
        >
          <NavLink
            to="/"
            className="header__logo focused-box hovered"
          ></NavLink>
          <nav
            className={`header__auth ${loggedIn && "header__auth_hidden"} ${
              routes.some((route) => route === location) &&
              "header__auth_hidden"
            }`}
          >
            <NavLink
              className="header__signup focused-text hovered"
              to="/signup"
            >
              Регистрация
            </NavLink>
            <NavLink
              className="header__signin focused-text hovered"
              to="/signin"
            >
              Вход
            </NavLink>
          </nav>
          <Navigation loggedIn={loggedIn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
