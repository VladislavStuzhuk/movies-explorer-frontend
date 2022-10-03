import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMoviesButton from '../MoreMoviesButton/MoreMoviesButton';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import { moviesList } from '../../utils/constants';

function Movies(props) {
  const {
    isSideBar,
    sideBarClose,
    sideBarOpen,
  } = props;  
  return (
    <>
      <Header
        onClickNavBtn={sideBarOpen}
      />
      <main>
        <SearchForm/>
        <MoviesCardList 
          moviesCards = {moviesList}
        />
        <MoreMoviesButton
          isVisible = {true}
        />
        <SideBar
          isOpen={isSideBar}
          onClose={sideBarClose}
        />
      </main>
      <Footer/>
    </>
 )
}
export default Movies;
