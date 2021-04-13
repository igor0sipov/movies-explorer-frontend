import "./SearchForm.css";
import { useState, useEffect } from "react";
import filterMovies from "../../utils/filterMovies";

const SearchForm = ({
  cards,
  setDisplayedCards,
  setIsNotFound,
  isCardsLoaded,
}) => {
  const [query, setQuery] = useState({
    text: "",
    isValid: false,
    validationMessage: "",
  });
  const [isShortFilmsIncluded, setIsShortFilmsIncluded] = useState(false);
  const [isInpitInvalid, setIsInpitInvalid] = useState(false);
  const errorText = "Нужно ввести ключевое слово";

  const search = (cardsData, shortFilmsState, searchInput) => {
    const result = filterMovies(cardsData, shortFilmsState, searchInput);
    if (result.length <= 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
      setDisplayedCards(result);
    }
  };

  const onCheckboxClick = () => {
    if (!isShortFilmsIncluded) {
      setIsShortFilmsIncluded(true);
    } else {
      setIsShortFilmsIncluded(false);
    }
  };

  useEffect(() => {
    if (!isCardsLoaded.done) {
      return;
    } else {
      search(cards, isShortFilmsIncluded, query.text);
    }
  }, [isShortFilmsIncluded]);

  const onSearchInputChange = (e) => {
    setQuery({
      text: e.target.value,
      isValid: e.target.validity.valid,
      validationMessage: e.target.validationMessage,
    });
    setIsInpitInvalid(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.text === "") {
      setIsInpitInvalid(true);
      return;
    }
    search(cards, isShortFilmsIncluded, query.text);
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

        <label className="search__label">
          <input
            type="checkbox"
            className="search__checkbox"
            defaultChecked={isShortFilmsIncluded}
            onChange={onCheckboxClick}
          />
          <div className="search__fake-checkbox">
            <div className="search__fake-checkbox-circle"></div>
          </div>
          Короткометражки
        </label>
      </form>
      <span
        className={`search__submit-error ${
          !isInpitInvalid && "search__submit-error_hidden"
        }`}
      >
        {errorText}
      </span>
      <div className="search__separator"></div>
    </section>
  );
};

export default SearchForm;
