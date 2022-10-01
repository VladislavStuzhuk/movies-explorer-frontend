import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { aboutMe } from '../../utils/constants';
import avatar from '../../images/avatar.png'
import './AboutMe.css'
function AboutMe() {
  
  return (
    <section id='student' className="about-me">
      <SectionHeader header='Студент'/>
      <div className='about-me__container'>
        <div className='about-me__student'>
          <h3 className='about-me__name'>Влад</h3>
          <h4 className='about-me__profession'>Фронтенд-разработчик, 20 лет</h4>
          <p className='about-me__description'>{ aboutMe }</p>
          <a href='#2' className='about-me__github'>Github</a>
        </div>
        <img src={avatar} className='about-me__avatar' alt='Влад'></img>
      </div>
    </section>
 )
}
export default AboutMe;
