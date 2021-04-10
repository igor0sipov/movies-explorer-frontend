import "./Movies.css";
import MoviesResult from "../MoviesResult/MoviresResult";

const Movies = ({ currentLocation, onLoad, onCardLikeClick }) => {
  return (
    <main className="movies movies-sizer">
      <MoviesResult
        onLoad={onLoad}
        onCardLikeClick={onCardLikeClick}
        currentLocation={currentLocation}
      />
    </main>
  );
};

export default Movies;
