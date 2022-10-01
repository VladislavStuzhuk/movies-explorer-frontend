import React from 'react';

import './MoreMoviesButton.css'
function MoreMoviesButton(props) {
  
  const { isVisible } = props;  
  return (
    <div className='more-btn__container'>
      <button 
        className={`more-btn__button ${(isVisible) ? '' : 'more-btn__button_disable'}`}
      >
        Ещё
      </button>
    </div> 
    )
}
export default MoreMoviesButton;
