import "./MoviesCard.css";

const MoviesCard = () => {
  const card = {
    name: "Какой-то фильм",
    img: "https://media.kg-portal.ru/images/next/next_28.jpg",
    duration: 27,
  };

  return (
    <div className="movie">
      <figure className="movie__content">
        <img src={card.img} className="movie__cover" alt="Обложка фильма" />
        <figcaption className="movie__info">
          <p className="movie__title">{card.name}</p>
          <p className="movie__duration">{card.duration + " минут"}</p>
        </figcaption>
      </figure>
      <button className="movie__save-button">Сохранить</button>
    </div>
  );
};

export default MoviesCard;
