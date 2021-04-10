import "./Movies.css";
import MoviesResult from "../MoviesResult/MoviresResult";

const Movies = ({ currentLocation, onLoad, saveMovie, deleteMovie }) => {
  return (
    <main className="movies movies-sizer">
      <MoviesResult
        onLoad={onLoad}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        currentLocation={currentLocation}
      />
    </main>
  );
};

export default Movies;
