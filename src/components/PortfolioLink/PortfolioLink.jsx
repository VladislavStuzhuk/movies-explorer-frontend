import React from 'react';

import logoLink from '../../images/linkbtn.svg'
import './PortfolioLink.css'
function PortfolioLink(props) {
  const { data } = props
  
  return (
      <div className='container'>
        <a href={data.src} rel="noreferrer" target="_blank" className="container__link">{data.title}</a>
        <img src={logoLink} className="container__icon" alt=""/>
      </div>
 )
}
export default PortfolioLink;