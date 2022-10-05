import React from 'react';
import './SignHeader.css'
import logo from '../../images/logo.svg';

function SignHeader(props) {
 const { title } = props
  return(
    <div className='sign-header'> 
      <img className="sign-header__logo" src={logo} alt=""/>
      <p className="sign-header__title">{title}</p>
    </div>  
  )
}
export default SignHeader;
