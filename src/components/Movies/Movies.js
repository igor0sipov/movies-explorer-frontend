import "./Movies.css";
import { useEffect, useState, useContext } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SearchForm from "../SearchForm/SearchForm";
import api from "../../utils/api";

const Movies = ({ setUser }) => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState(true);
  const user = useContext(CurrentUserContext);

  console.log(user);
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
  return (
    <main className="movies movies-sizer">
      <SearchForm />
      <MoviesCardList
        isLoaded={isCardsLoaded}
        cards={cards}
        user={user}
        setUser={setUser}
      />
    </main>
  );
};

export default Movies;
