const filterMovies = (movies, isShortFilmsIncluded, query) => {
  let lang = "ru";
  if (query === "") {
    if (isShortFilmsIncluded) {
      return movies.filter((movie) => movie.duration <= 40);
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
            ? movie.nameRU.toLowerCase().includes(query)
            : movie.nameEN && movie.nameEN.toLowerCase().includes(query)) &&
          movie.duration <= 40
      );
    }
    return movies.filter((movie) =>
      lang === "ru"
        ? movie.nameRU.toLowerCase().includes(query)
        : movie.nameEN && movie.nameEN.toLowerCase().includes(query)
    );
  }
};

export default filterMovies;
