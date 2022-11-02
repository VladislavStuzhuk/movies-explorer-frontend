import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import SignHeader from '../SignHeader/SignHeader';

const Login = (props) => {
  const {
    onLogin,
    errorMessage
  } = props;
  
  const EmailRef = React.useRef('');
  const PasswordRef = React.useRef('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    onLogin({
      "password": PasswordRef.current.value,
      "email": EmailRef.current.value, 
    })
  }
  return(
    <div className="sign">
      <SignHeader title="Рады видеть!" />
      <form className="sign__form" onSubmit={handleSubmit}>
        <p className='sign__text'>E-mail</p>
        <input 
          className="sign__input" 
          type="email"
          required
          ref={EmailRef}
        />
        <p className='sign__text'>Пароль</p>
        <input 
          className="sign__input" 
          type="password"
          required
          ref={PasswordRef}
        />
        {
         (errorMessage) ? <p className='sign__error'>{errorMessage}</p> : <p></p>
        }
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
