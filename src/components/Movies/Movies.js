import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ currentLocation, onLoad, onCardLikeClick }) => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState(false);
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    onLoad(setCards, setIsCardsLoaded);
  }, []);

  return (
    <main className="movies movies-sizer">
      <SearchForm />
      <MoviesCardList
        isLoaded={isCardsLoaded}
        cards={cards}
        onCardButton={onCardLikeClick}
        location={currentLocation}
      />
    </main>
  );
};

export default Movies;
