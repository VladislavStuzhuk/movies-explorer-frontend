import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import {isValidEmail, isValidName} from '../../utils/validate';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.css'
function Profile(props) {
  const {
    loggedIn,
    onUpdate,
    errorMessage,
    onSignOut,
  } = props;
  
  const currentUser = React.useContext(CurrentUserContext);
  const [validateErr,setValidateErr] = useState('')
  const [valedateOk, setValidateOk] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  useEffect(()=>{
    setName(currentUser.name);
    setEmail(currentUser.email);
  },[currentUser])
  
  useEffect(()=>{
    console.log(errorMessage);
    if (errorMessage === ""){
      setValidateErr(errorMessage)
      setValidateOk(true)
    } else if (errorMessage !== ''){
      setValidateErr(errorMessage)
      setValidateOk(false)
    }
  },[errorMessage])

  useEffect(()=>{
    setValidateOk(false)
    if (!name || !email){ 
      setIsDisabled(true) 
    } else if (name === currentUser.name && email === currentUser.email){
      setIsDisabled(true) 
    } else if (!isValidEmail(email)) {
      setValidateErr('Введен невалидный E-mail')
      setIsDisabled(true) 
    } else if (!isValidName(name)) {
      setValidateErr('Имя должно состоять из букв, пробела или дефиса')
      setIsDisabled(true) 
    } else{
      setValidateErr('')
      setIsDisabled(false);
    }
  },[name, email])

  const handleSubmit = (e) =>{
    e.preventDefault();
    setValidateOk(false)
    
      onUpdate({
        "name": name,
        "email": email, 
      })
      if( errorMessage == ''){
        setValidateOk(true)
      }
      setValidateErr(''); 
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
      />
      <form className='profile__container'>
        <h2 className='profile__header'>Привет, {currentUser.name}</h2>
        <div className='profile__name'>
          <p className='profile__text'>Имя</p>
          <input 
            className='profile__text profile__input'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='profile__email'>
          <p className='profile__text'>E-mail</p>
          <input 
            className='profile__text profile__input'
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
          />
        </div>
        {valedateOk  ? <p className='profile__message'>Данные успешно обновлены</p> : <></>}
        {validateErr ? <p className='sign__error'>{validateErr}</p> : <></>}
        <div className='profile__buttons'>
          <button className='profile__button' onClick={handleSubmit} disabled={isDisabled}>Редактировать</button>
          <button className='profile__button profile__button_red' onClick={onSignOut}>Выйти из аккаунта</button>
        </div>
      </form>
    </>
 )
}
export default Profile;
