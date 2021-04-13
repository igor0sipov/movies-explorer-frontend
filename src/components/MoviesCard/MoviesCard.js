import "./MoviesCard.css";
import { useState } from "react";
import normalizeDuration from "../../utils/normalizeDuration";

const MoviesCard = ({
  removeCardFromList,
  likeIds,
  movie,
  location,
  cardButtonHandlers,
}) => {
  const { saveMovie, deleteMovie } = cardButtonHandlers;
  const card = {
    ...movie,
    picture:
      typeof movie.image === "string" &&
      movie.image.match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&=]*)/i
      )
        ? movie.image
        : movie.image === null
        ? "https://www.zastavki.com/pictures/originals/2014/Men___Male_Celebrity__056952_.jpg"
        : "https://api.nomoreparties.co" + movie.image.url,
  };

  const [isLiked, setIsLiked] = useState(
    card.movieId ? true : likeIds.some((id) => id === card.id)
  );

  const onBtnClick = () => {
    if (isLiked) {
      setIsLiked(false);
      deleteMovie(card._id ? card._id : card.id);
      if (location === "/saved-movies") {
        removeCardFromList(card._id);
      }
    } else {
      setIsLiked(true);
      saveMovie({
        ...card,
        image: card.picture,
        trailer: card.trailerLink,
        movieId: card.id,
        thumbnail:
          "https://api.nomoreparties.co" + card.image.formats.thumbnail.url,
      });
    }
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
          <p className="movie__duration">{normalizeDuration(card.duration)}</p>
        </figcaption>
      </figure>
      <label className="movie__save">
        <input
          className="movie__fake-checkbox"
          type="checkbox"
          defaultChecked={isLiked}
        />
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
