import "./MoviesCard.css";

const MoviesCard = ({ movie, user, setUser }) => {
  const { savedMovies } = user;
  const onBtnClick = () => {
    const newArray = [...savedMovies];
    if (!savedMovies.includes(movie.id)) {
      setUser({ ...user, savedMovies: [...savedMovies, movie.id] });
    } else {
      newArray.splice(savedMovies.indexOf(movie.id), 1);
      setUser({
        ...user,
        savedMovies: newArray,
      });
    }
    return;
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
        <input
          className="movie__fake-checkbox"
          type="checkbox"
          defaultChecked={savedMovies.includes(movie.id)}
        />
        <div className="movie__save-button" onClick={onBtnClick}></div>
      </label>
    </div>
  );
};

export default MoviesCard;
