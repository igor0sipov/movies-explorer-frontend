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
}) => {
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [likeIds, setLikeIds] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState({
    done: false,
    ok: false,
  });
  const [isNotFound, setIsNotFound] = useState(false);

  const removeCardFromList = (deletedId) => {
    setCards(cards.filter((card) => card._id !== deletedId));
  };

  useEffect(() => {
    onLoad(setCards, setIsCardsLoaded, setLikeIds);
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
          setCards={setCards}
        />
      )}
    </main>
  );
};

export default Movies;
