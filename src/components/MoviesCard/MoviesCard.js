import "./MoviesCard.css";

const MoviesCard = ({ movie, onCardButton, location }) => {
  const onBtnClick = () => {
    onCardButton();
  };

  const card = {
    img:
      movie.image === null
        ? "https://www.zastavki.com/pictures/originals/2014/Men___Male_Celebrity__056952_.jpg"
        : "https://api.nomoreparties.co" + movie.image.url,
    name: movie.nameRU,
    duration: movie.duration + " минут",
  };

  return (
    <div className="movie">
      <figure className="movie__content">
        <img src={card.img} className="movie__cover" alt="Обложка фильма" />
        <figcaption className="movie__info">
          <p className="movie__title">{card.name}</p>
          <p className="movie__duration">{card.duration}</p>
        </figcaption>
      </figure>
      <label className="movie__save">
        <input className="movie__fake-checkbox" type="checkbox" />
        <div
          className={`movie__save-button ${
            location === "/movies"
              ? "movie__save-button_type_movies"
              : "movie__save-button_type_saved-movies"
          }`}
          onClick={onBtnClick}
        ></div>
      </label>
    </div>
  );
};

export default MoviesCard;
