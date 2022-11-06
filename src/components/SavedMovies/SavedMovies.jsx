import React, { useEffect, useState } from "react";

import api from '../../utils/MainApi.js';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMoviesButton from '../MoreMoviesButton/MoreMoviesButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filterMovies, filterOnlyShortMovies } from '../../utils/filters';

function SavedMovies(props) {
  const {
    loggedIn,
    savedMovies,
    setSavedMovies,
    onSignOut,
  } = props;  
  const [moviesForRender, setMoviesForRender] = useState(savedMovies);
  const [isNothingFound, setNothingFound] = useState(false);
  
  useEffect(() => {
    setMoviesForRender(savedMovies)
  }, [savedMovies]); 

  
  function deleteMovieHandler(movieId,setLike){
    api.deleteMovie(movieId)
    .then(()=>{
        setLike(false)
        setSavedMovies((state) =>
            state.filter((m) => m._id !== movieId)
          );
     })
     .catch((err)=>{
       if (err.status ===401) onSignOut();
     });
  }
  function submitFormHandler(search, checkbox){
    let filteredMovies;
    if (!checkbox) {
      filteredMovies = (filterMovies(search, savedMovies))
    } else{
      filteredMovies = (filterOnlyShortMovies(search, savedMovies))
    };
    (filteredMovies.length === 0) ? setNothingFound(true) : setNothingFound(false) 
    setMoviesForRender(filteredMovies);
  }
  return (
    <>
      <Header
        loggedIn={loggedIn}
      />
      <main>
        <SearchForm
          onSubmit={submitFormHandler}
        />
        {
        <MoviesCardList
          savedMovies={savedMovies}
          onDeleteHandler={deleteMovieHandler}
          moviesCards = {moviesForRender}
          isSavedPage={true}
        />
        }
        {
          isNothingFound? 
          <p className="movie__nothing-found">Ничего не найдено :-(</p> :
          <MoreMoviesButton
            isVisible = {false}
          />
         }
      </main>
      <Footer/>
    </>
 )
}
export default SavedMovies;
