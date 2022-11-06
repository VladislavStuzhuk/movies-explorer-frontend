import React, {useState, useEffect}from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import {isValidEmail} from '../../utils/validate';
import SignHeader from '../SignHeader/SignHeader';

const Login = (props) => {
  const {
    onLogin,
    errorMessage
  } = props;
  
  const [isDisabled, setIsDisabled] = useState(true)
  const [validateErr,setValidateErr] = useState('')
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  useEffect(()=>{
    if (!email || !password) setIsDisabled(true) 
    else setIsDisabled(false);
  },[email, password])

  useEffect(()=> {
    if (!isValidEmail(email)){
      setValidateErr('Введен невалидный E-mail')
      setIsDisabled(true) 
    } else {
      setValidateErr('')
      if (password) setIsDisabled(false);
    }
  },[email])

  useEffect(()=>{
    setValidateErr(errorMessage)
  },[errorMessage])

  const handleSubmit = (e) =>{
    e.preventDefault();
      onLogin({
        "password": password,
        "email": email, 
      })
    
  }
  return(
    <div className="sign">
      <SignHeader title="Рады видеть!" />
      <form className="sign__form" onSubmit={handleSubmit}>
        <p className='sign__text'>E-mail</p>
        <input 
          className="sign__input"
          onChange={e => setEmail(e.target.value)}
        />
        <p className='sign__text'>Пароль</p>
        <input 
          className="sign__input" 
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        {
         (validateErr) ? <p className='sign__error'>{validateErr}</p> : <p></p>
        }
        <button className="sign__submit-button" disabled={isDisabled}>Войти</button>
        
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
