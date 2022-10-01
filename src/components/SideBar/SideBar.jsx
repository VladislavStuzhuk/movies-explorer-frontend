import React from 'react';
import { Link} from 'react-router-dom';

import closeIcn from '../../images/side-bar-close.svg';
import profileLogo from '../../images/profile-logo.svg';
import './SideBar.css';

function SideBar(props) {
  const {
    isOpen,
    onClose
  } = props;
  return (
    <div className={`side-bar-overlay ${isOpen ? "side-bar-overlay_visible" : ""}`}>
      <div className={`side-bar ${isOpen ? "side-bar_visible" : ""}`}>
        <button
          className='side-bar__close-btn'
          onClick={onClose}
        >
          <img className='side-bar__close-icon' alt="" src={closeIcn}/>
        </button>
        <ul className='side-bar__container'>
          <li>
            <Link to="/" className="side-bar__container_links"> 
            Главная
            </Link>
          </li>          
          <li>
            <Link to="/movies" className="side-bar__container_links"> 
              Фильмы
            </Link>          
          </li>
          <li>
            <Link to="/saved-movies" className="side-bar__container_links"> 
              Сохранённые фильмы
            </Link>          
          </li>
          <li>
            <Link to="/profile" className="side-bar__container_links side-bar__container_profile"> 
              Аккаунт
              <img className="header__nav_logo side-bar__container_profile-logo" src={profileLogo} alt=""/>
            </Link>
          </li>
        </ul>
      </div>
    </div>  
  )
}
export default SideBar;