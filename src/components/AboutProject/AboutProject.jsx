import React from 'react';

import './AboutProject.css'
function AboutProject() {
  
  return (
    <section id='about-project' className="about">
      <h2 className='about__header'>О проекте</h2>
      <div className='about__info'>
        <div>
          <h3 className='about__subheader'>Дипломный проект включал 5 этапов</h3>
          <p className='about__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className='about__subheader'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about__time-laps'>
        <div className='about__back-end'>
          <p className='about__scale about__scale_green-block'> 1 неделя </p>
          <p className='about__tech'>Back-end</p>
        </div>
        <div className='about__front-end'>
          <p className='about__scale about__scale_gray-block'> 4 недели </p>
          <p className='about__tech'>Front-end</p>
        </div>
      </div>
    </section>
 )
}
export default AboutProject;
