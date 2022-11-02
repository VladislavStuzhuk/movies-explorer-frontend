import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css'
function MoviesCardList(props) {
  const { 
    moviesCards,
    savedMovies,
    onSaveHandler, 
    onDeleteHandler,
  } = props;
  return (
    <section className='movies-list'>
      {moviesCards.map((data) =>{
              return <MoviesCard 
                        savedMovies={savedMovies}
                        onSaveHandler={onSaveHandler}
                        onDeleteHandler={onDeleteHandler}
                        key={data.id || data._id}
                        data={data}
                     />
          })}      
    </section>
 )
}
export default MoviesCardList;
