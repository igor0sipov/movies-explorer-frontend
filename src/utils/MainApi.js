class MainApi {
  constructor() {
    this._apiUrl =
      "https://api.movies-explorer.fakealien.students.nomoredomains.icu";
  }

  _handleResponse(res) {
    return res.json().then((json) => {
      if (!res.ok) {
        throw json;
      }
    });
  }

  register({ name, password, email }) {
    return fetch(this._apiUrl + "/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi();
export default mainApi;
