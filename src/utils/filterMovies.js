import config from "../configs/config";

const filterMovies = (movies, isShortFilmsIncluded, query) => {
  let lang = "ru";
  if (!query || query === "") {
    if (isShortFilmsIncluded) {
      return movies.filter(
        (movie) => movie.duration <= config.shortMovieDuratuion
      );
    }
    return movies;
  } else {
    if (query.match(/[^A-Za-z]/g)) {
      lang = "ru";
    } else {
      lang = "en";
    }
    if (isShortFilmsIncluded) {
      return movies.filter(
        (movie) =>
          (lang === "ru"
            ? movie.nameRU.toLowerCase().includes(query.toLowerCase())
            : movie.nameEN &&
              movie.nameEN.toLowerCase().includes(query.toLowerCase())) &&
          movie.duration <= 40
      );
    }
    return movies.filter((movie) =>
      lang === "ru"
        ? movie.nameRU.toLowerCase().includes(query.toLowerCase())
        : movie.nameEN &&
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
    );
  }
};

export default filterMovies;
