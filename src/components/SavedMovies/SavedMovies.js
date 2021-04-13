import "./SavedMovies.css";
import Movies from "../Movies/Movies";
import { useState } from "react";

const SavedMovies = ({
  currentLocation,
  onSavedMoviesPageLoad,
  cardButtonHandlers,
  styleClass,
}) => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState({
    done: false,
    ok: false,
  });

  const onLoad = () => {
    onSavedMoviesPageLoad(setCards, setIsCardsLoaded);
  };
  const removeCardFromList = (deletedId) => {
    setCards(cards.filter((card) => card._id !== deletedId));
  };

  return (
    <Movies
      currentLocation={currentLocation}
      onLoad={onLoad}
      cardButtonHandlers={cardButtonHandlers}
      styleClass={styleClass}
      isCardsLoaded={isCardsLoaded}
      cards={cards}
      removeCardFromList={removeCardFromList}
    />
  );
};

export default SavedMovies;
