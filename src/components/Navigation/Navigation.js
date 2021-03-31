import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Burger from "../Burger/Burger";

const Navigation = ({
  loggedIn,
  isBurgerPressed,
  onLinkClick,
  user,
  onBurgerClick,
}) => {
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
            className={`navigation__menu-link`}
            exact
            to="/"
            onClick={onLinkClick}
          >
            Главная
          </NavLink>
          <NavLink
            activeClassName="navigation__menu-link_active"
            className="navigation__menu-link"
            exact
            to="/movies"
            onClick={onLinkClick}
          >
            Фильмы
          </NavLink>
          <NavLink
            activeClassName="navigation__menu-link_active"
            className="navigation__menu-link"
            exact
            to="/saved-movies"
            onClick={onLinkClick}
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            activeClassName="navigation__menu-link_active navigation__menu-link_active_type_account"
            className="navigation__menu-link navigation__menu-link_type_account"
            exact
            to="/profile"
            onClick={onLinkClick}
          >
            {user.name}
            <div className="navigation__avatar"></div>
          </NavLink>
        </nav>
      </div>
      <Burger isBurgerPressed={isBurgerPressed} onBurgerClick={onBurgerClick} />
    </div>
  );
};

export default Navigation;
