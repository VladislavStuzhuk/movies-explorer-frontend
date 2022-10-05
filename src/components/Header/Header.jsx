import React from 'react';
import { useLocation, Route, Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileLogo from '../../images/profile-logo.svg';
import navBtn from '../../images/nav-btn.svg';

import './Header.css';
const loggedIn = true;

function Header(props) {
  const {
    onClickNavBtn
  } = props
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
                    onClick={onClickNavBtn}
                    type='button'
            >
              <img src={navBtn} alt=""/>
            </button>
          </>
        }
      </div>
    </header>
  )
}
export default Header;