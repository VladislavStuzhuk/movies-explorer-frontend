import React from 'react';
import {Link} from 'react-router-dom';
import './SignHeader.css'
import logo from '../../images/logo.svg';

function SignHeader(props) {
 const { title } = props
  return(
    <div className='sign-header'> 
    <Link to="/"> 
      <img className="sign-header__logo" src={logo} alt=""/>
    </Link>
      <p className="sign-header__title">{title}</p>
    </div>  
  )
}
export default SignHeader;
