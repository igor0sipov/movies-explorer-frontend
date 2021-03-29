class Api {
  constructor() {
    this._url = "https://api.nomoreparties.co/beatfilm-movies";
  }

  _handleResponse(result) {
    if (!result.ok) {
      return Promise.reject(`Ошибка ${result.status}`);
    }
    return result;
  }

  getCards() {
    return fetch(this._url)
      .then(this._handleResponse)
      .then((data) => data.json())
      .catch((err) => err);
  }
}

const api = new Api();

export default api;
