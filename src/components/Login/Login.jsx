import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import SignHeader from '../SignHeader/SignHeader';

function Login() {
  return(
    <div className="sign">
      <SignHeader title="Рады видеть!" />
      <form className="sign__form">
        <p className='sign__text'>E-mail</p>
        <input 
          className="sign__input" 
        />
        <p className='sign__text'>Пароль</p>
        <input 
          className="sign__input" 
          type="password"
        />
        <button className="sign__submit-button">Войти</button>
        
        <p className='sign__question'>
          Ещё не зарегистрированы?&nbsp;
          <Link to="/sign-up" className="sign__redirect-button">
            Регистрация
          </Link>
        </p>
      </form>
    </div>  
  )
}
export default Login;
