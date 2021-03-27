import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="search sizer">
      <form className="search__form">
        <div className="search__wrapper">
          <label htmlFor="film-search" className="search__magnifier"></label>
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            id="film-search"
          />
          <button className="search__submit"></button>
        </div>

        <div className="search__form-separator"></div>

        <label className="search__label" htmlFor="short-film">
          <input type="checkbox" className="search__checkbox" id="short-film" />
          <div className="search__fake-checkbox">
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
