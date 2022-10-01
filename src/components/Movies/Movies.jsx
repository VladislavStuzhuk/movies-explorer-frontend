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
    <div className="movies">
      <Header
        onClickNavBtn={sideBarOpen}
      />
      <SearchForm/>
      <MoviesCardList 
        moviesCards = {moviesList}
      />
      <MoreMoviesButton
        isVisible = {true}
      />
      <Footer/>
      <SideBar
        isOpen={isSideBar}
        onClose={sideBarClose}
      />
    </div>
 )
}
export default Movies;
