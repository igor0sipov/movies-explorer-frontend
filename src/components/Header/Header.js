import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = ({
  loggedIn,
  user,
  isBurgerPressed,
  onBurgerClick,
  setIsBurgerPressed,
  location,
}) => {
  const routes = ["/signin", "/signup"];

  const onLinkClick = () => {
    setIsBurgerPressed(false);
  };

  return (
    <header
      className={`header header_sized ${
        location === "/" && "header_type_promo"
      } ${routes.some((route) => route === location) && "header_type_auth"}`}
    >
      <NavLink to="/" className="header__logo"></NavLink>
      <nav
        className={`header__auth ${loggedIn && "header__auth_hidden"} ${
          routes.some((route) => route === location) && "header__auth_hidden"
        }`}
      >
        <NavLink className="header__signup" to="/signup">
          Регистрация
        </NavLink>
        <NavLink className="header__signin" to="/signin">
          Вход
        </NavLink>
      </nav>
      <Navigation
        loggedIn={loggedIn}
        isBurgerPressed={isBurgerPressed}
        onLinkClick={onLinkClick}
        user={user}
        onBurgerClick={onBurgerClick}
      />
    </header>
  );
};

export default Header;
