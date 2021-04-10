import "./MoviesResult.css";
import { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

const MoviesResult = ({ currentLocation, onLoad, onCardLikeClick }) => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState({
    done: false,
    status: false,
  });

  useEffect(() => {
    onLoad(setCards, setIsCardsLoaded);
  }, []);

  return (
    <div className="result">
      <SearchForm cards={cards} setCards={setCards} />
      {isCardsLoaded.done ? (
        isCardsLoaded.status ? (
          <MoviesCardList
            isLoaded={isCardsLoaded}
            cards={cards}
            onCardButton={onCardLikeClick}
            location={currentLocation}
          />
        ) : (
          <div className="result__error">
            <h2 className="result__error-heading">
              Во время запроса произошла ошибка.
            </h2>
            <p className="result__error-text">
              Возможно, проблема с соединением или сервер недоступен. Подождите
              немного и попробуйте ещё раз
            </p>
          </div>
        )
      ) : (
        <Preloader isLoaded={isCardsLoaded.done} />
      )}
    </div>
  );
};

export default MoviesResult;
