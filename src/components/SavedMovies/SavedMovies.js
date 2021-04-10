import "./SavedMovies.css";
import Movies from "../Movies/Movies";

const SavedMovies = ({
  currentLocation,
  onLoad,
  cardButtonHandlers,
  styleClass,
}) => {
  return (
    <Movies
      currentLocation={currentLocation}
      onLoad={onLoad}
      cardButtonHandlers={cardButtonHandlers}
      styleClass={styleClass}
    />
  );
};

export default SavedMovies;
