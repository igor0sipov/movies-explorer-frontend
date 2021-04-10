import MoviesResult from "../MoviesResult/MoviresResult";
import "./SavedMovies.css";

const SavedMovies = ({ currentLocation, onLoad, deleteMovie }) => {
  return (
    <main className="saved-movies movies-sizer">
      <MoviesResult
        onLoad={onLoad}
        deleteMovie={deleteMovie}
        currentLocation={currentLocation}
      />
    </main>
  );
};

export default SavedMovies;
