import React from 'react';
import {Link} from 'react-router-dom';
import SignHeader from '../SignHeader/SignHeader';

function Register() {
  return(
    <div className="sign">
      <SignHeader title="Добро пожаловать!" />
      <form className="sign__form">
        <p className='sign__text'>Имя</p>
        <input 
          className="sign__input" 
        />
        <p className='sign__text'>E-mail</p>
        <input 
          className="sign__input" 
        />
        <p className='sign__text'>Пароль</p>
        <input 
          className="sign__input" 
          type="password"
        />
        <button className="sign__submit-button">Зарегистрироваться</button>
        
        <p className='sign__question'>
        Уже зарегистрированы?&nbsp;
          <Link to="/sign-in" className="sign__redirect-button">
            Войти
          </Link>
        </p>
      </form>
    </div>  
  )
}
export default Register;