import React from 'react';

import logoLink from '../../images/linkbtn.svg'
import './PortfolioLink.css'
function PortfolioLink(props) {
  const { data } = props
  
  return (
      <div className='container'>
        <a href={data.src} rel="noreferrer" target="_blank" className="container__link">{data.title}</a>
        <a href={data.src} rel="noreferrer" target="_blank" className="container__link">
          <img src={logoLink} className="container__icon" alt=""/>
        </a>
      </div>
 )
}
export default PortfolioLink;