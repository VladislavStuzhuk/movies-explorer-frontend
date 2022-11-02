import React from 'react';
import {Link} from 'react-router-dom';
import SignHeader from '../SignHeader/SignHeader';

function Register(props) {
  const {
    onRegister,
    errorMessage,
  } = props
  
  const NameRef = React.useRef('');
  const EmailRef = React.useRef('');
  const PasswordRef = React.useRef('');

  const handleSubmit = (e) =>{
     e.preventDefault();
     onRegister({
      "name": NameRef.current.value,
      "password": PasswordRef.current.value,
      "email": EmailRef.current.value, 
     })
  }

  return(
    <div className="sign">
      <SignHeader title="Добро пожаловать!" />
      <form className="sign__form" onSubmit={handleSubmit}>
        <p className='sign__text'>Имя</p>
        <input 
          className="sign__input" 
          ref={NameRef}
          required
        />
        <p className='sign__text'>E-mail</p>
        <input 
          className="sign__input" 
          ref={EmailRef}
          type="email"
          required
        />
        <p className='sign__text'>Пароль</p>
        <input 
          className="sign__input" 
          type="password"
          ref={PasswordRef}
          required
          minLength={8}
        />
        {
         (errorMessage) ? <p className='sign__error'>{errorMessage}</p> : <p></p>
        }
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