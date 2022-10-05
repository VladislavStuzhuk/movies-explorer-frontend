import React from 'react';
import NavTab from '../NavTab/NavTab'

import './Footer.css'
function Footer() {
  
  return (
    <footer className="footer">
      <p className='footer__title'> Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__date'>&#169; 2022</p>
        <div className='footer__links'>
          <a href="#1" className='footer__link'>Яндекс.Практикум</a>
          <a href="#1" className='footer__link'>Github</a>
        </div>
      </div>
    </footer>
 )
}
export default Footer;
