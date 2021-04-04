class MainApi {
  constructor() {
    this._apiUrl =
      "https://api.movies-explorer.fakealien.students.nomoredomains.icu";
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi();
export default mainApi;
