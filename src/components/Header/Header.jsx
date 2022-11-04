import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import logo from '../../images/logo.svg';
import profileLogo from '../../images/profile-logo.svg';
import navBtn from '../../images/nav-btn.svg';

import './Header.css';


function Header(props) {
  const {
    loggedIn,
  } = props

  const [isSideBarOpen, setSideBarOpen] = useState(false);
  function handleSideBarBtn(){
    setSideBarOpen(true);
  }
  
  function closeSideBar(){
    setSideBarOpen(false);
  }
  
  return (
    <header className="header">
      <Link to="/" className="header__logo_link"> 
        <img className="header__logo" src={logo} alt=""/>
      </Link>
      <div className="header__nav">
        {!loggedIn ? 
          <>           
            <Link to="/sign-up" className="header__nav_sign-up header__nav_white-btn"> 
                Регистрация
            </Link>          
            <Link to="/sign-in"> 
              <button className="header__nav_sign-in" type='button'>
                Войти
              </button>
            </Link>
          </>
          :
          <>
            <div className='header__nav_hidden'>          
              <Link to="/movies" className="header__nav_white-btn header__nav_movies"> 
                  Фильмы
              </Link>          
              <Link to="/saved-movies" className="header__nav_white-btn header__nav_saved-movies"> 
                  Сохранённые фильмы
              </Link>          
              <Link to="/profile" className="header__nav_white-btn header__nav_profile"> 
                  Аккаунт
                <img className="header__nav_logo" src={profileLogo} alt=""/>
              </Link>
            </div>
            <button className='header__nav_btn'
                    onClick={handleSideBarBtn}
                    type='button'
            >
              <img src={navBtn} alt=""/>
            </button>
          </>
        }
      </div>
      <SideBar
        isOpen={isSideBarOpen}
        onClose={closeSideBar}
      />
    </header>
  )
}
export default Header;