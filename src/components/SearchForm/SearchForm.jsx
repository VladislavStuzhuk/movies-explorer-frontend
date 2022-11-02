import React, { useEffect, useState }  from 'react';

import searchBtn from '../../images/search-btn.svg';
import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css'
function SearchForm(props) {
  const {onSubmit} = props;
  const [isChecked, setIsChecked] = useState(true);
  const searchRef = React.useRef('');

  useEffect(() => {  
    if (window.location.href.includes('/movies')){
      let prevReq = JSON.parse(localStorage.getItem("previousRequest"));
      if (prevReq){
        searchRef.current.value=prevReq ?prevReq.input : "";
        setIsChecked(prevReq.checkbox);
      }
    }
  }, [])

  function submitHandler(e){
    e.preventDefault();
    if (window.location.href.includes('/movies')){
      const prevReq = {
        'input': searchRef.current.value,
        'checkbox': isChecked,
      }
      localStorage.setItem('previousRequest', JSON.stringify(prevReq))
    }
    onSubmit(searchRef.current.value, isChecked)
  }
  function onCheckBoxChange(){
    console.log(isChecked);
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }
  return (
    <section className='search-form'>
      <form className="search-form__container" onSubmit={submitHandler}>
        <input className="search-form__input" ref={searchRef}required placeholder='Фильм'/>
        <button className='search-form__button' type='submit'> 
          <img src={searchBtn} alt='поиск'/>
        </button>
        <div className='search-form__checkbox-container'>
          <Checkbox 
            isChecked={isChecked}
            onCheckChange={onCheckBoxChange}
          />
          <p className='search-form__shortfils'>Короткометражки</p>
        </div>
      </form>
    </section>
    
 )
}
export default SearchForm;
