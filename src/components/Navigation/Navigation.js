import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../Burger/Burger";

const Navigation = ({ loggedIn }) => {
  const [isBurgerPressed, setIsBurgerPressed] = useState(false);

  const onLinkClick = () => {
    setIsBurgerPressed(false);
  };

  return (
    <div className={`navigation ${!loggedIn && "navigation_hidden"}`}>
      <div
        className={`navigation__container ${
          isBurgerPressed && "navigation__container_visible"
        }`}
      >
        <nav
          className={`navigation__menu ${
            isBurgerPressed && "navigation__menu_displayed"
          }`}
        >
          <NavLink
            activeClassName="navigation__menu-link_active"
            className={`navigation__menu-link focused-box`}
            exact
            to="/"
            onClick={onLinkClick}
          >
            Главная
          </NavLink>
          <NavLink
            activeClassName="navigation__menu-link_active"
            className="navigation__menu-link focused-box"
            exact
            to="/movies"
            onClick={onLinkClick}
          >
            Фильмы
          </NavLink>
          <NavLink
            activeClassName="navigation__menu-link_active"
            className="navigation__menu-link focused-box"
            exact
            to="/saved-movies"
            onClick={onLinkClick}
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            activeClassName="navigation__menu-link_active navigation__menu-link_active_type_account"
            className="navigation__menu-link navigation__menu-link_type_account focused-box"
            exact
            to="/profile"
            onClick={onLinkClick}
          >
            Аккаунт
            <div className="navigation__avatar"></div>
          </NavLink>
        </nav>
      </div>
      <Burger
        isBurgerPressed={isBurgerPressed}
        setIsBurgerPressed={setIsBurgerPressed}
      />
    </div>
  );
};

export default Navigation;
