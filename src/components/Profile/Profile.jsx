import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import './Profile.css'
function Profile(props) {
  const {
    isSideBar,
    sideBarClose,
    sideBarOpen,
  } = props;
  return (
    <>
      <Header
        onClickNavBtn={sideBarOpen}
      />
      <section className='profile__container'>
        <h2 className='profile__header'>Привет, Влад!</h2>
        <div className='profile__name'>
          <p className='profile__text'>Имя</p>
          <p className='profile__text'>Влад</p>
        </div>
        <div className='profile__email'>
          <p className='profile__text'>E-mail</p>
          <p className='profile__text'>pochta@gm.com</p>
        </div>
        <div className='profile__buttons'>
          <button className='profile__button'>Редактировать</button>
          <button className='profile__button profile__button_red'>Выйти из аккаунта</button>
        </div>
      </section>
      <SideBar
        isOpen={isSideBar}
        onClose={sideBarClose}
      />
    </>
 )
}
export default Profile;
