import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ currentLocation, onLoad }) => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState(false);
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    onLoad(setCards, setIsCardsLoaded);
  }, []);

  const onCardButton = () => {
    console.log("Card Pressed");
    // const newArray = [...cards];
    // if (!user.savedMovies.includes(movie.id)) {
    //   setUser({ ...user, savedMovies: [...user.savedMovies, movie.id] });
    // } else {
    //   newArray.splice(user.savedMovies.indexOf(movie.id), 1);
    //   setUser({
    //     ...user,
    //     savedMovies: newArray,
    //   });
    // }
    // return;
  };

  return (
    <main className="movies movies-sizer">
      <SearchForm />
      <MoviesCardList
        isLoaded={isCardsLoaded}
        cards={cards}
        onCardButton={onCardButton}
        location={currentLocation}
      />
    </main>
  );
};

export default Movies;
