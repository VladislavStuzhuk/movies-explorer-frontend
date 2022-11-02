import React from 'react';

import './MoreMoviesButton.css'
function MoreMoviesButton(props) {
  
  const { isVisible, moreMovies } = props;  
  return (
    <div className='more-btn__container'>
      <button 
        className={`more-btn__button ${(isVisible) ? '' : 'more-btn__button_disable'}`}
        type='button'
        onClick={moreMovies}
      >
        Ещё
      </button>
    </div> 
    )
}
export default MoreMoviesButton;
