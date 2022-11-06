class Api{
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }
  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    console.log('ты еблан')
    return fetch(this._url, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

}
const movieApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Content-Type": "application/json",
  },
});
export default movieApi;