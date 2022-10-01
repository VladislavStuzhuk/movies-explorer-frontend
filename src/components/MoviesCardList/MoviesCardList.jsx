import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css'
function MoviesCardList(props) {
  console.log(props);
  const { moviesCards } = props
  return (
    <section className='movies-list'>
      {moviesCards.map((data) =>{
            console.log(data);
              return <MoviesCard key={data.movieId} data={data}/>
          })}      
    </section>
 )
}
export default MoviesCardList;
