import "./MoviesResult.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import CardsError from "../CardsError/CardsError";

const MoviesResult = ({
  currentLocation,
  isCardsLoaded,
  cardButtonHandlers,
  cards,
  likeIds,
  removeCardFromList,
}) => {
  return (
    <div className="result">
      {isCardsLoaded.done ? (
        isCardsLoaded.ok ? (
          cards.length > 0 ? (
            <MoviesCardList
              cards={cards}
              cardButtonHandlers={cardButtonHandlers}
              location={currentLocation}
              likeIds={likeIds}
              removeCardFromList={removeCardFromList}
            />
          ) : (
            <CardsError
              heading="Ничего нет :("
              text="Попробуйте добавить карточки или подождать и обновить страницу"
            />
          )
        ) : (
          <CardsError
            heading="Во время запроса произошла ошибка"
            text="Возможно, проблема с соединением или сервер недоступен. Подождите
        немного и попробуйте ещё раз"
          />
        )
      ) : (
        <Preloader isLoaded={isCardsLoaded.done} />
      )}
    </div>
  );
};

export default MoviesResult;
