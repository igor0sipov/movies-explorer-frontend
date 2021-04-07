import Movies from "../Movies/Movies";
import "./SavedMovies.css";

const SavedMovies = ({
  cards,
  isCardsLoaded,
  user,
  setUser,
  onCardButton,
  currentLocation,
}) => {
  const likedCards = user.savedMovies.map((id) => {
    return cards.find((card) => card.id === id);
  });
  return (
    <Movies
      cards={likedCards}
      isCardsLoaded={isCardsLoaded}
      setUser={setUser}
      onCardButton={onCardButton}
      location={currentLocation}
    />
  );
};

export default SavedMovies;
