import React, { useState, useEffect } from 'react';

import './MoviesCard.css'
function MoviesCard(props) {
  const { 
    savedMovies, 
    data,
    onSaveHandler,
    onDeleteHandler,
      } = props;
  const [isSaved, setIsSaved] = useState(false)
  
  useEffect(() => {
    if (savedMovies.some((movie) => movie.movieId === data.id || data._id)) {
      setIsSaved(true);
    }
  }, [savedMovies, data.id]);

  function handleSaveBtnClick(){
    if(isSaved){
      const movieRemoveId = (savedMovies.find((movie) =>  (movie.movieId === data.id) || (movie.movieId === data.movieId))._id)
      console.log(movieRemoveId)
      onDeleteHandler(movieRemoveId, setIsSaved)
    }
    if(!isSaved){
      const movieData = {
        country: data.country,
        description: data.description,
        director: data.director,
        duration: data.duration,
        movieId: data.id,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
        nameEN: data.nameEN,
        nameRU: data.nameRU,
        trailerLink: data.trailerLink,
        year: data.year,
      }
      onSaveHandler(movieData,setIsSaved)
    }
  }
  return (
    <div className='movie'>
        <a href={data.trailerLink} target="__blank" rel="noreferrer" className='movie__link'>
          <img src={data.image.url ? `https://api.nomoreparties.co/${data.image.url }` : data.image} alt={data.nameRu} className='movie__image'/>
        </a>
        <button 
          onClick={handleSaveBtnClick} 
          className={`movie__save ${(isSaved) ? 'movie__save_active' : ""}`}
          type='button'
        >
           { (isSaved) ? '' : 'Сохранить'}
        </button>
      <div className='movie__description'>
        <p className='movie__title'>{data.nameRU}</p>
        <p className='movie__duration'>{`${Math.floor(data.duration/60)}ч ${data.duration - Math.floor(data.duration/60)*60}м`}</p>
      </div>
    </div>
 )
}
export default MoviesCard;
