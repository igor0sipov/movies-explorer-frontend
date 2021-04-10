import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ isLoaded, cards, onCardButton, location }) => {
  const [quantity, setQuantity] = useState(12);
  const [showMoreQuantity, setShowMoreQuantity] = useState(3);

  const getWindowWidth = () => {
    const { innerWidth: width } = window;

    return width;
  };
  useEffect(() => {
    if (getWindowWidth() >= 1280) {
      setQuantity(12);
      setShowMoreQuantity(3);
    } else if (getWindowWidth() < 1280 && getWindowWidth() > 768) {
      setQuantity(12);
      setShowMoreQuantity(2);
    } else if (getWindowWidth() <= 768 && getWindowWidth() > 480) {
      setQuantity(8);
      setShowMoreQuantity(2);
    } else if (getWindowWidth() <= 480) {
      setQuantity(5);
      setShowMoreQuantity(2);
    } else {
      setShowMoreQuantity(12);
    }
  }, []);

  const showMore = () => {
    setQuantity(quantity + showMoreQuantity);
  };

  const onBtnClick = () => {
    return showMore();
  };

  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.slice(0, quantity).map((movie) => {
          return (
            <li key={movie.id} className="cards__item">
              <MoviesCard
                movie={movie}
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
