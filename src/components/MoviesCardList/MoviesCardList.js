import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import config from "../../configs/config";

const MoviesCardList = ({
  removeCardFromList,
  likeIds,
  cards,
  location,
  cardButtonHandlers,
}) => {
  const [quantity, setQuantity] = useState(12);
  const [showMoreQuantity, setShowMoreQuantity] = useState(3);
  const {
    movieQuantityL,
    movieQuantityM,
    movieQuantityS,
    showMoreL,
    showMoreM,
    showMoreS,
  } = config;
  const getWindowWidth = () => {
    const { innerWidth: width } = window;

    return width;
  };
  useEffect(() => {
    if (getWindowWidth() >= 1280) {
      setQuantity(movieQuantityL);
      setShowMoreQuantity(showMoreM);
    } else if (getWindowWidth() < 1280 && getWindowWidth() > 768) {
      setQuantity(movieQuantityL);
      setShowMoreQuantity(showMoreS);
    } else if (getWindowWidth() <= 768 && getWindowWidth() > 480) {
      setQuantity(movieQuantityM);
      setShowMoreQuantity(showMoreS);
    } else if (getWindowWidth() <= 480) {
      setQuantity(movieQuantityS);
      setShowMoreQuantity(showMoreS);
    } else {
      setShowMoreQuantity(showMoreL);
    }
    if (location === "/saved-movies") {
      setQuantity(100);
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
            <li key={movie.id ? movie.id : movie._id} className="cards__item">
              <MoviesCard
                movie={movie}
                cardButtonHandlers={cardButtonHandlers}
                location={location}
                likeIds={likeIds}
                removeCardFromList={removeCardFromList}
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
