import "./MoviesCardList.css";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  isLoaded,
  cards,
  user,
  onCardButton,
  location,
}) => {
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
              <MoviesCard
                movie={movie}
                user={user}
                onCardButton={onCardButton}
                location={location}
              />
            </li>
          );
        })}
      </ul>
      <button
        className={`cards__loader ${
          cards.length < quantity && "cards__loader_hidden"
        } focused-box`}
        onClick={onBtnClick}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
