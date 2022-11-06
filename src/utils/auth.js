class Auth {
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
  
  register(data){
    console.log(data)
    return fetch(`${this._url}/signup`,{ 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({
        name: data.name,
        password: data.password,
        email: data.email
      })
    }).then(this._handleResponse);
  }
  
  login(data){
    return fetch(`${this._url}/signin`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    }).then(this._handleResponse)
  }
  checkToken(data){
  return fetch(`${this._url}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${data}`,
      },
    }).then(this._handleResponse);
  }
}
const auth = new Auth({
  baseUrl: 'https://api.vlad.kinoman.nomoredomains.sbs',
});
export default auth;