import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import TechCard from '../TechCard/TechCard';
import { techCards } from '../../utils/constants'
import './Techs.css'
function Techs() {
  
  return (
    <section id='techs' className="techs">
      <SectionHeader header='Технологии'/>
      <h3 className='tech__title'>7 технологий</h3>
      <p className='tech__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        {techCards.map((tech,i) =>{
            return <TechCard key={i} title={tech}/>
        })}
      </ul>
    </section>
 )
}
export default Techs;
