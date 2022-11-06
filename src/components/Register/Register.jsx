import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {isValidEmail, isValidName} from '../../utils/validate';
import SignHeader from '../SignHeader/SignHeader';

function Register(props) {
  const {
    onRegister,
    errorMessage,
  } = props
  
  const [isDisabled, setIsDisabled] = useState(true)
  const [validateErr,setValidateErr] = useState('')
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 
  useEffect(()=>{
    if (!name || !email || !password){ 
      setIsDisabled(true) 
    }  else if (!isValidEmail(email)) {
      setValidateErr('Введен невалидный E-mail')
      setIsDisabled(true) 
    } else if (!isValidName(name)) {
      setValidateErr('Имя должно состоять из букв, пробела или дефиса')
      setIsDisabled(true) 
    } else{
      setValidateErr('')
      setIsDisabled(false);
    }
  },[name, email, password])

  useEffect(()=>{
    setValidateErr(errorMessage)
  },[errorMessage])

  const handleSubmit = (e) =>{
     e.preventDefault();
     setIsDisabled(true)
     onRegister({
      "name": name,
      "password": password,
      "email": email, 
     })
  }

  return(
    <div className="sign">
      <SignHeader title="Добро пожаловать!" />
      <form className="sign__form" onSubmit={handleSubmit}>
        <p className='sign__text'>Имя</p>
        <input 
          className="sign__input" 
          onChange={e => setName(e.target.value)}
        />
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
        <button className="sign__submit-button" disabled={isDisabled}>Зарегистрироваться</button>
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