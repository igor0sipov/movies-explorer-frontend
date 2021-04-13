import "./Movies.css";
import { useState, useEffect } from "react";
import MoviesResult from "../MoviesResult/MoviesResult";
import SearchForm from "../SearchForm/SearchForm";
import CardsError from "../CardsError/CardsError";

const Movies = ({
  currentLocation,
  onLoad,
  cardButtonHandlers,
  styleClass,
  cards,
  likeIds,
  isCardsLoaded,
  removeCardFromList,
}) => {
  const [displayedCards, setDisplayedCards] = useState([]);

  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    setDisplayedCards(cards);
  }, [cards]);

  return (
    <main className={`${styleClass} movies-sizer`}>
      <SearchForm
        cards={cards}
        setDisplayedCards={setDisplayedCards}
        displayedCards={displayedCards}
        setIsNotFound={setIsNotFound}
        isCardsLoaded={isCardsLoaded}
      />
      {isNotFound ? (
        <CardsError
          heading="Не найдено"
          text="Попробуйте ввести другой запрос"
        />
      ) : (
        <MoviesResult
          cards={displayedCards}
          onLoad={onLoad}
          cardButtonHandlers={cardButtonHandlers}
          currentLocation={currentLocation}
          isCardsLoaded={isCardsLoaded}
          removeCardFromList={removeCardFromList}
          likeIds={likeIds}
        />
      )}
    </main>
  );
};

export default Movies;
