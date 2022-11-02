import React, { useEffect, useState } from "react";

import api from '../../utils/MainApi.js';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMoviesButton from '../MoreMoviesButton/MoreMoviesButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filterMovies, filterOnlyLongMovies } from '../../utils/filters';

function SavedMovies(props) {
  const {
    loggedIn,
    savedMovies,
    setSavedMovies,
  } = props;  
  const [moviesCyka, setMoviesCyka] = useState(savedMovies);
  const [isNothingFound, setNothingFound] = useState(false);
  
  useEffect(() => {
    setMoviesCyka(savedMovies)
    console.log(moviesCyka)
  }, [savedMovies]); 

  
  function deleteMovieHandler(movieId,setLike){
    console.log(movieId)
    console.log(savedMovies)
    api.deleteMovie(movieId)
    .then(()=>{
        setLike(false)
        setSavedMovies((state) =>
            state.filter((m) => m._id !== movieId)
          );
        console.log(moviesCyka)
     })
     .catch(err=>console.log(err));
  }
  function submitFormHandler(search, checkbox){
    let filteredMovies;
    if (checkbox) {
      filteredMovies = (filterMovies(search, savedMovies))
    } else{
      filteredMovies = (filterOnlyLongMovies(search, savedMovies))
    };
    (filteredMovies.length === 0) ? setNothingFound(true) : setNothingFound(false) 
    setMoviesCyka(filteredMovies);
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
          moviesCards = {moviesCyka}
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
