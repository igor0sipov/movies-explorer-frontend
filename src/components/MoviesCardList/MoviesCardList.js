import "./MoviesCardList.css";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
const MoviesCardList = ({ isLoaded, cards }) => {
  const [quantity, setQuantity] = useState(12);
  const showMore = () => {
    setQuantity(quantity + 12);
  };

  const onBtnClick = () => {
    return showMore();
  };

  return (
    <section className="cards">
      <Preloader isLoaded={isLoaded} />
      <ul className="cards__list">
        {cards.slice(0, quantity).map((movie) => {
          return (
            <li key={movie.id} className="cards__item">
              <MoviesCard movie={movie} />
            </li>
          );
        })}
      </ul>
      <button className="cards__loader" onClick={onBtnClick}>
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
