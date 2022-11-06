import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css'
function MoviesCardList(props) {
  const { 
    moviesCards,
    savedMovies,
    onSaveHandler, 
    onDeleteHandler,
    isSavedPage,
  } = props;
  return (
    <section className='movies-list'>
      {moviesCards.map((data) =>{
              return <MoviesCard 
                        savedMovies={savedMovies}
                        onSaveHandler={onSaveHandler}
                        onDeleteHandler={onDeleteHandler}
                        isSavedPage={isSavedPage}
                        key={data.id || data._id}
                        data={data}
                     />
          })}      
    </section>
 )
}
export default MoviesCardList;
