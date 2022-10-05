import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  function handleSideBarBtn(){
    setSideBarOpen(true);
    console.log(isSideBarOpen);
  }
  function closeSideBar(){
    setSideBarOpen(false);
    console.log(isSideBarOpen);
  }

  return (
    <div className='app'>
      <Switch>
        <Route exact path="/">
          <Main
            isSideBar = {isSideBarOpen}
            sideBarClose = {closeSideBar}
            sideBarOpen = {handleSideBarBtn}
          />
        </Route>
        <Route path="/sign-up">
          <Register
           // onRegister={handleRegister} 
          />
        </Route> 
        <Route path="/sign-in">
          <Login
           // onLogin={handleLogin}
          />
        </Route>
        <ProtectedRoute
          path="/movies"
          //loggedIn={loggedIn}
          component={Movies}
          isSideBar = {isSideBarOpen}
          sideBarClose = {closeSideBar}
          sideBarOpen = {handleSideBarBtn}
        />
       <ProtectedRoute
          path="/saved-movies"
          //loggedIn={loggedIn}
          component={SavedMovies}
          isSideBar = {isSideBarOpen}
          sideBarClose = {closeSideBar}
          sideBarOpen = {handleSideBarBtn}
        />
         <ProtectedRoute
          path="/profile"
          //loggedIn={loggedIn}
          component={Profile}
          isSideBar = {isSideBarOpen}
          sideBarClose = {closeSideBar}
          sideBarOpen = {handleSideBarBtn}
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
