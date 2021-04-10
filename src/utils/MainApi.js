class MainApi {
  constructor() {
    this._apiUrl = "http://localhost:3001";
  }

  _handleResponse(res) {
    return res.json().then((json) => {
      if (!res.ok) {
        throw json;
      } else {
        return json;
      }
    });
  }

  register({ name, password, email }) {
    return fetch(this._apiUrl + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    }).then(this._handleResponse);
  }

  login({ email, password }) {
    return fetch(this._apiUrl + "/signin", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._handleResponse);
  }

  getUser() {
    return fetch(this._apiUrl + "/users/me", {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(this._handleResponse);
  }

  logout() {
    return fetch(this._apiUrl + "/signout", {
      method: "POST",
      credentials: "include",
    }).then(this._handleResponse);
  }

  getMovies() {
    return fetch(this._apiUrl + "/movies", {
      credentials: "include",
    }).then(this._handleResponse);
  }

  addMovie({
    owner,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    movieId,
    thumbnail,
  }) {
    return fetch(this._apiUrl + "/movies", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        owner,
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        movieId,
        thumbnail,
      }),
    }).then(this._handleResponse);
  }

  deleteMovie(movieId) {
    return fetch(this._apiUrl + "/movies/" + movieId, {
      method: "DELETE",
      credentials: "include",
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi();
export default mainApi;
