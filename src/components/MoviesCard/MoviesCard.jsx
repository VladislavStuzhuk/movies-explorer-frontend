import React from 'react';

import './MoviesCard.css'
function MoviesCard(props) {
  const { data } = props;
  const [isSaveButtonActive, setSaveButtonActive] = React.useState(false)
   
  function handleSaveBtnClick(){
    if(isSaveButtonActive) setSaveButtonActive(false)
    if(!isSaveButtonActive) setSaveButtonActive(true)
  }

  return (
    <div className='movie'>
        <a href={data.trailerLink} target="__blank" rel="noreferrer" className='movie__link'>
          <img src={data.image} alt={data.nameRu} className='movie__image'/>
        </a>
        <button onClick={handleSaveBtnClick} className={`movie__save ${(isSaveButtonActive) ? 'movie__save_active' : ""}`}>
           { (isSaveButtonActive) ? '' : 'Сохранить'}
        </button>
      <div className='movie__description'>
        <p className='movie__title'>{data.nameRu}</p>
        <p className='movie__duration'>{data.duration}</p>
      </div>
    </div>
 )
}
export default MoviesCard;
