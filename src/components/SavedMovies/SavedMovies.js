import Movies from "../Movies/Movies";
import "./SavedMovies.css";

const SavedMovies = ({
  cards,
  isCardsLoaded,
  user,
  setUser,
  onCardButton,
  location,
}) => {
  const likedCards = user.savedMovies.map((id) => {
    return cards.find((card) => card.id === id);
  });
  console.log(likedCards);
  return (
    <Movies
      cards={likedCards}
      isCardsLoaded={isCardsLoaded}
      setUser={setUser}
      onCardButton={onCardButton}
      location={location}
    />
  );
};

export default SavedMovies;
