import React from 'react';
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import { portfolioLinks } from '../../utils/constants';

import './Portfolio.css'
function Portfolio() {
  
  return (
    <section id='student' className="portfolio">
      <h3 className='portfolio__header'>Портфолио</h3>
      <ul className='portfolio__links'>
        {portfolioLinks.map((data, i) =>{
              return <li  key={i} className='portfolio__link'> 
                        <PortfolioLink data={data}/>
                      </li>
          })}
    </ul>
    </section>
 )
}
export default Portfolio;
