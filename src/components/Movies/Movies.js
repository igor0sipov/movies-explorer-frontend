import "./Movies.css";
import { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import api from "../../utils/api";

const Movies = () => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState(true);

  useEffect(() => {
    setIsCardsLoaded(false);
    api
      .getCards()
      .then((cardsData) => {
        setIsCardsLoaded(true);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(cards);
  return (
    <main className="movies movies-sizer">
      <SearchForm />
      <MoviesCardList isLoaded={isCardsLoaded} cards={cards} />
    </main>
  );
};

export default Movies;
