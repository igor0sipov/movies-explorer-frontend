import "./Movies.css";
import { useContext } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ cards, isCardsLoaded, setUser, onCardButton, location }) => {
  console.log(cards);
  const user = useContext(CurrentUserContext);

  console.log(user);
  return (
    <main className="movies movies-sizer">
      <SearchForm />
      <MoviesCardList
        isLoaded={isCardsLoaded}
        cards={cards}
        user={user}
        setUser={setUser}
        onCardButton={onCardButton}
        location={location}
      />
    </main>
  );
};

export default Movies;
