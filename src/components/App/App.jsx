import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory  } from 'react-router-dom';
import './App.css';
import auth from '../../utils/auth.js';
import api from '../../utils/MainApi.js';
import movieApi from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../context/CurrentUserContext';

console.log(CurrentUserContext)
function App() {
  
  let allMovies = JSON.parse(localStorage.getItem("allMoviesData"));

  const [currentUser, setCurrentUser] = useState({});

  const [allMoviesList, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [registerError, setRegisterError] = useState("")
  const [loginError, setLoginError] = useState("")
  const [updateError, setUpdateError] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      auth.checkToken(jwt).
        then(res => {
          setLoggedIn(true);
          history.push("/movies");
        }).
      catch(err => console.log(err))
    }  
  },[history, loggedIn])

   //Получение информации о пользователе 
  useEffect(() => {
    api.getUserInfo().
    then((user)=>{
      setCurrentUser(user.data);
    }).
    catch(err => console.log(err))
  }, [loggedIn])
  //Получение фильмов 
  useEffect(() => {
    if (!allMovies){
      movieApi.getMovies().
      then((data)=>{
        setAllMovies(data);
        localStorage.setItem('allMoviesData', JSON.stringify(data));
      }).catch(err => console.log(err))
    } else {
      setAllMovies(allMovies);
    }
  }, [loggedIn])

  useEffect(() =>{
    api.getSavedMovies()
    .then((data) => {
      let userMovies = data.filter((movie) => {
        if (movie.owner === currentUser._id) return movie
      })
      setSavedMovies(userMovies)
    })
    .catch((err) => console.log(err))
  }, [currentUser])

  function handleUpdateProfile(data){
    api.patchUserInfo(data).
    then(user => setCurrentUser(user.data)).
    catch(err => {
      if (err.status ===409) setUpdateError('Пользователь с данным e-mail уже зарегестрирован.');
    });
  }
  
  function handleRegister(data){
    auth.register(data).
    then(
      data =>{
        history.push('sign-in');
      },
      err =>{
        if (err.status ===409) setRegisterError('Пользователь с данным e-mail уже зарегестрирован.');
      }
    )
  }
  
  function handleLogin(data){
    auth.login(data).
      then(
        res =>{
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('movies')
        },
        err=>{
          if (err.status ===401) setLoginError('Неправильная почта или пароль.');
        }
      )
  }
  
  function handleSignOut(){
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <div className='app'>
      <Switch>
        <Route exact path="/">
          <Main
            loggedIn={loggedIn}
          />
        </Route>
        <Route path="/sign-up">
          <Register
           errorMessage={registerError}
           onRegister={handleRegister} 
          />
        </Route> 
        <Route path="/sign-in">
          <Login
            errorMessage={loginError}
            onLogin={handleLogin}
          />
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          allMovies={allMoviesList}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
       <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
         <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          errorMessage={updateError}
          currentUser={currentUser}
          onUpdate={handleUpdateProfile}
          onSignOut={handleSignOut}
          component={Profile}
        />
        <Route>
          <NotFound path="/404" />
        </Route>
        <Redirect to="/404"/>
      </Switch> 
      
      
      
    </div>
  );
}

export default App;
