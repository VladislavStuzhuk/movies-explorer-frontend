import React from 'react';

import './TechCard.css'
function TechCard(props) {
  const { title } = props
  
  return (
      <li className='tech-card'>{title}</li>
 )
}
export default TechCard;