import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header
      className={`header header_sized ${props.promo ? "header_promo" : ""}`}
    >
      <Link className="header__logo" to="/" />
      <nav className="header__auth">
        <button className="header__signup-button button">Регистрация</button>
        <button className="header__signin-button button">Войти</button>
      </nav>
    </header>
  );
};

export default Header;
