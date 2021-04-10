import "./SearchForm.css";
import { useState } from "react";
import filterMovies from "../../utils/filterMovies";

const SearchForm = ({ cards, setCards }) => {
  const [query, setQuery] = useState("");
  const [isShortFilmsIncluded, setIsShortFilmsIncluded] = useState(false);
  const onCheckboxClick = () => {
    if (!isShortFilmsIncluded) {
      setIsShortFilmsIncluded(true);
    } else {
      setIsShortFilmsIncluded(false);
    }
  };

  const onSearchInputChange = (e) => {
    setQuery({
      text: e.target.value,
      isValid: e.target.validity.valid,
      validationMessage: e.target.validationMessage,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const initialCards = JSON.parse(localStorage.getItem("cards"));
    const result = filterMovies(initialCards, isShortFilmsIncluded, query.text);
    console.log(result);
    setCards(result);
  };

  return (
    <section className="search sizer">
      <form className="search__form" onSubmit={onSubmit} noValidate>
        <div className="search__wrapper">
          <label htmlFor="film-search" className="search__magnifier"></label>
          <input
            className="search__input focused-box"
            type="text"
            placeholder="Фильм"
            id="film-search"
            onChange={onSearchInputChange}
            required
          />
          <button className="search__submit focused-box"></button>
        </div>

        <div className="search__form-separator"></div>

        <label className="search__label" htmlFor="short-film">
          <input
            type="checkbox"
            className="search__checkbox"
            id="short-film"
            defaultChecked={isShortFilmsIncluded}
          />
          <div className="search__fake-checkbox" onClick={onCheckboxClick}>
            <div className="search__fake-checkbox-circle"></div>
          </div>
          Короткометражки
        </label>
      </form>
      <div className="search__separator"></div>
    </section>
  );
};

export default SearchForm;
