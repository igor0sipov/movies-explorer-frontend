import "./MoviesResult.css";
import { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

const MoviesResult = ({ currentLocation, onLoad, saveMovie, deleteMovie }) => {
  const [cards, setCards] = useState([]);
  const [likeIds, setLikeIds] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState({
    done: false,
    status: false,
  });

  const removeCardFromList = (deletedId) => {
    setCards(cards.filter((card) => card._id !== deletedId));
  };

  console.log(likeIds);
  useEffect(() => {
    onLoad(setCards, setIsCardsLoaded, setLikeIds);
  }, []);

  return (
    <div className="result">
      <SearchForm cards={cards} setCards={setCards} />
      {isCardsLoaded.done ? (
        isCardsLoaded.status ? (
          <MoviesCardList
            cards={cards}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            location={currentLocation}
            likeIds={likeIds}
            setCards={setCards}
            removeCardFromList={removeCardFromList}
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
