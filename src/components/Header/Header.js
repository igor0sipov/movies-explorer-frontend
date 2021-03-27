import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import Burger from "../Burger/Burger";

const Header = ({ loggedIn, user, isBurgerPressed, onBurgerClick }) => {
  const location = useLocation().pathname;

  return (
    <header
      className={`header header_sized ${
        location === "/" && "header_type_promo"
      }`}
    >
      <NavLink to="/" className="header__logo"></NavLink>
      <nav className={`header__auth ${loggedIn && "header__auth_hidden"}`}>
        <NavLink className="header__signup" to="/signup">
          Регистрация
        </NavLink>
        <NavLink className="header__signin" to="/signin">
          Вход
        </NavLink>
      </nav>
      <div
        className={`header__container ${
          !loggedIn && "header__container_hidden"
        } ${isBurgerPressed && "header__container_visible"}`}
      >
        <nav
          className={`header__menu ${
            isBurgerPressed && "header__menu_displayed"
          }`}
        >
          <NavLink
            activeClassName="header__menu-link_active"
            className={`header__menu-link`}
            exact
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            activeClassName="header__menu-link_active"
            className="header__menu-link"
            exact
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            activeClassName="header__menu-link_active"
            className="header__menu-link"
            exact
            to="/saved-movies"
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            activeClassName="header__menu-link_active header__menu-link_active_type_account"
            className="header__menu-link header__menu-link_type_account"
            exact
            to="/me"
          >
            {user}
            <div className="header__avatar"></div>
          </NavLink>
        </nav>
      </div>
      <Burger
        loggedIn={loggedIn}
        isBurgerPressed={isBurgerPressed}
        onBurgerClick={onBurgerClick}
      />
    </header>
  );
};

export default Header;
