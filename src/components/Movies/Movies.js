import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

const Movies = ({ currentLocation, onLoad, onCardLikeClick }) => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState({
    done: false,
    status: false,
  });
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    onLoad(setCards, setIsCardsLoaded);
  }, []);

  return (
    <main className="movies movies-sizer">
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
          <div>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </div>
        )
      ) : (
        <Preloader isLoaded={isCardsLoaded.done} />
      )}
    </main>
  );
};

export default Movies;
