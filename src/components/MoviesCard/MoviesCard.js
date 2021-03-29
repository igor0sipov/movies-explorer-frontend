import "./MoviesCard.css";

const MoviesCard = ({ movie }) => {
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
      <button className="movie__save-button">Сохранить</button>
    </div>
  );
};

export default MoviesCard;
