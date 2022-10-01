import React from 'react';

import searchBtn from '../../images/search-btn.svg';
import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css'
function SearchForm() {
  
  return (
    <section className='search-form'>
      <form className="search-form__container">
        <input className="search-form__input" placeholder='Фильм'/>
        <button className='search-form__button'> 
          <img src={searchBtn} alt='поиск'/>
        </button>
        <div className='search-form__checkbox-container'>
          <Checkbox />
          <p className='search-form__shortfils'>Короткометражки</p>
        </div>
      </form>
    </section>
    
 )
}
export default SearchForm;
