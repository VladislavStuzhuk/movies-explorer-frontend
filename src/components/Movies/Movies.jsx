import React, { useEffect, useState } from "react";

import './Movies.css';
import api from '../../utils/MainApi.js';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMoviesButton from '../MoreMoviesButton/MoreMoviesButton';
import Preloader from "../Preloader/Preloader.jsx";
import { filterMovies, filterOnlyLongMovies } from '../../utils/filters';

function Movies(props) {
  const {
    loggedIn,
    allMovies,
    savedMovies,
    setSavedMovies,
  } = props;
  const [isNothingFound, setNothingFound] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allFilteredMovies, setAllFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(false)
  const [cardsAmount, setCardsAmount] =  useState(0);
  const [cardsPages, setCardsPages] = useState(0);
  const [cardsLoad, setCardsLoad] = useState(0);
  let cardsCount = cardsAmount + cardsLoad * cardsPages;

  useEffect(() => {  
    const previousMovies = JSON.parse(localStorage.getItem("previousMoviesData"));
    if (previousMovies) {
      setAllFilteredMovies(previousMovies);
    }
  }, [])
  let width = window.innerWidth;
  useEffect(() => {
    if (width >= 1280) {
      setCardsAmount(12);
      setCardsLoad(3);
    } else if (width > 500 && width < 1280) {
      setCardsAmount(8);
      setCardsLoad(2);
    } else if (width <= 500) {
      setCardsAmount(5);
      setCardsLoad(1);
    }
  }, [width]);

  useEffect(() => {
    setMovies(allFilteredMovies.slice(0, cardsCount));
    cardsCount < allFilteredMovies.length ? setBtnVisible(true): setBtnVisible(false)
  }, [allFilteredMovies, cardsCount])


  function saveMovieHandler(movie, setLike){
     api.saveMovie(movie)
     .then((newMovie) => {
      setSavedMovies([...savedMovies, newMovie])
      setLike(true)
     })
     .catch(err=>console.log(err));
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
     .catch(err=>console.log(err));
  }
  async function submitFormHandler(search, checkbox){
    setIsLoading(true);
    localStorage.removeItem('previousMoviesData')
    let filteredMovies;
    if (checkbox) {
      filteredMovies = (filterMovies(search, allMovies))
    } else{
      filteredMovies = (filterOnlyLongMovies(search, allMovies))
    };
    (filteredMovies.length === 0) ? setNothingFound(true) : setNothingFound(false) 
    await setAllFilteredMovies(filteredMovies);
    localStorage.setItem('previousMoviesData', JSON.stringify(filteredMovies));
    setIsLoading(false);
  }
  const moreButtonHandler = () =>
    setCardsPages((prev) => prev + 1);
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
          isNothingFound? 
          <p className="movie__nothing-found">Ничего не найдено :-(</p> :
          <MoreMoviesButton
            isVisible = {isBtnVisible}
            moreMovies = {moreButtonHandler}
          />
         }
      </main>
      <Footer/>
    </>
 )
}
export default Movies;
