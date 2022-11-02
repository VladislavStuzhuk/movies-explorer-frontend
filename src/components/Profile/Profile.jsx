import React from 'react';
import Header from '../Header/Header';

import './Profile.css'
function Profile(props) {
  const {
    loggedIn,
    onUpdate,
    onSignOut,
    currentUser,
  } = props;

  const NameRef = React.useRef('');
  const EmailRef = React.useRef('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    onUpdate({
     "name": NameRef.current.value,
     "email": EmailRef.current.value, 
    })
    NameRef.current.value = "";
    EmailRef.current.value = "";
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
            placeholder={currentUser.name}
            required
            ref={NameRef}
          />
        </div>
        <div className='profile__email'>
          <p className='profile__text'>E-mail</p>
          <input 
            className='profile__text profile__input'
            placeholder={currentUser.email}
            required
            type='email'
            ref={EmailRef}
          />
        </div>
        <div className='profile__buttons'>
          <button className='profile__button' onClick={handleSubmit}>Редактировать</button>
          <button className='profile__button profile__button_red' onClick={onSignOut}>Выйти из аккаунта</button>
        </div>
      </form>
    </>
 )
}
export default Profile;
