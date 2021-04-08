import "./MoviesCard.css";

const MoviesCard = ({ movie, onCardButton, location }) => {
  const card = {
    ...movie,
    picture:
      movie.image === null
        ? "https://www.zastavki.com/pictures/originals/2014/Men___Male_Celebrity__056952_.jpg"
        : "https://api.nomoreparties.co" + movie.image.url,
  };

  const onBtnClick = () => {
    onCardButton({
      ...card,
      image: card.picture,
      trailer: card.trailerLink,
      movieId: card.id,
      thumbnail:
        "https://api.nomoreparties.co" + card.image.formats.thumbnail.url,
    });
  };

  return (
    <div className="movie">
      <figure className="movie__content">
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            src={card.picture}
            className="movie__cover"
            alt="Обложка фильма"
          />
        </a>
        <figcaption className="movie__info">
          <p className="movie__title">{card.nameRU}</p>
          <p className="movie__duration">{card.duration + " минут"}</p>
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
