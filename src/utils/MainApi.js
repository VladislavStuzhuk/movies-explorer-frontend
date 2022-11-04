class Api{
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }
  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }

  getUserInfo() { 
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {  ...this._headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
    }).then(this._handleResponse)
  }
  patchUserInfo(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: { ...this._headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    }).then(this._handleResponse)
  }
  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: { ...this._headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
    }).then(this._handleResponse)
  }
  saveMovie(data) {
    console.log(data)
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: { ...this._headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
      body: JSON.stringify(data)  
    }).then(this._handleResponse)
  }
  deleteMovie(movieId){
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: { ...this._headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
    }).then(this._handleResponse)
  }
}
const api = new Api({
  baseUrl: 'https://api.vlad.kinoman.nomoredomains.sbs',
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;