import React, { useEffect, useState } from "react";

import './Movies.css';
import api from '../../utils/MainApi.js';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMoviesButton from '../MoreMoviesButton/MoreMoviesButton';
import Preloader from "../Preloader/Preloader.jsx";
import { filterMovies, filterOnlyShortMovies } from '../../utils/filters';
import { DISPLAY_NEXT_MOVIE_MOBILE, DISPLAY_NEXT_MOVIES_TABLET, DISPLAY_NEXT_MOVIES_LAPTOP, TABLET_WIDTH,LAPTOP_WIDTH } from '../../utils/constants'

function Movies(props) {
  const {
    loggedIn,
    onSignOut,
    allMovies,
    savedMovies,
    setSavedMovies,
  } = props;
  const [isError, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allFilteredMovies, setAllFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(false)
  const [cardsAmount, setCardsAmount] =  useState(0);
  const [errorMessage, setErrorMessage] = useState(0);
  

  useEffect(() => {  
    const previousMovies = JSON.parse(localStorage.getItem("previousMoviesData"));
    if (previousMovies) {
      setAllFilteredMovies(previousMovies);
    }
  }, [])
  let width = window.innerWidth;
  useEffect(() => {
    if (width >= LAPTOP_WIDTH) {
      setCardsAmount(12);
    } else if (width >= TABLET_WIDTH && width < LAPTOP_WIDTH) {
      setCardsAmount(8);
    } else if (width < TABLET_WIDTH) {
      setCardsAmount(5);
    }
  }, []);

  useEffect(() => {
    setMovies(allFilteredMovies.slice(0, cardsAmount));
    cardsAmount < allFilteredMovies.length ? setBtnVisible(true): setBtnVisible(false)
  }, [allFilteredMovies, cardsAmount])

  function errorsHandler(message, isError){
    setError(isError);
    setErrorMessage(message);
  }
  function saveMovieHandler(movie, setLike){
     api.saveMovie(movie)
     .then((newMovie) => {
      setSavedMovies([...savedMovies, newMovie])
      setLike(true)
     })
     .catch((err)=>{
       if (err.status ===401) onSignOut();
     });
  };
  
  function deleteMovieHandler(movieId,setLike){
    api.deleteMovie(movieId)
    .then(()=>{
      setSavedMovies((state) =>
          state.filter((m) => m._id !== movieId)
        );
      setLike(false)
      }
     )
    .catch((err)=>{
      if (err.status ===401) onSignOut();
    });
  }
  async function submitFormHandler(search, checkbox){
    setIsLoading(true);
    setTimeout(() => {
      if (search){
        localStorage.removeItem('previousMoviesData')
        let filteredMovies;
        if (!checkbox) {
          filteredMovies = (filterMovies(search, allMovies))
        } else{
          filteredMovies = (filterOnlyShortMovies(search, allMovies))
        };
        (filteredMovies.length === 0) ? errorsHandler("Ничего не найдено :-(",true) : errorsHandler('',false) 
         setAllFilteredMovies(filteredMovies);
        localStorage.setItem('previousMoviesData', JSON.stringify(filteredMovies));
      } else {
        setAllFilteredMovies([]);
        errorsHandler("Введите ключевое слово", true)
      }
      setIsLoading(false);
    }, 600);
  }
  const displayMoreMovieHandler = () => {
    if (window.innerWidth >= LAPTOP_WIDTH ){
      setCardsAmount(cardsAmount + DISPLAY_NEXT_MOVIES_LAPTOP)
    } else if (window.innerWidth >= TABLET_WIDTH && window.innerWidth <LAPTOP_WIDTH) {
      setCardsAmount(cardsAmount + DISPLAY_NEXT_MOVIES_TABLET)
    } else if (window.innerWidth < TABLET_WIDTH) {
    setCardsAmount(cardsAmount + DISPLAY_NEXT_MOVIE_MOBILE)
  } 
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
        {isLoading ? 
          <Preloader/> :
          <MoviesCardList
            savedMovies={savedMovies}
            onSaveHandler={saveMovieHandler} 
            onDeleteHandler={deleteMovieHandler}
            moviesCards = {movies}
          />
         }
         {
          isError && !isLoading? 
          <p className="movie__nothing-found">{errorMessage} </p> :
          <MoreMoviesButton
            isVisible = {isBtnVisible}
            moreMovies = {displayMoreMovieHandler}
          />
         }
      </main>
      <Footer/>
    </>
 )
}
export default Movies;
