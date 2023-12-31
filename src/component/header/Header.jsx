import React from 'react';
import './header.css';
import CallToAction from './CallToAction';
import Me from '../../assests/me.png';
import HeaderSocial from './HeaderSocial';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className="type"><h1>Mohit Devade</h1></div>
        <h5 className="text-light">React Developer</h5>
        <CallToAction/>
        <HeaderSocial/> 
        <div className="me">
        <img src={Me} alt="my_image" />
        </div>
        <a href="#contact" onClick={()=>document.getElementById("contactPage").click()} className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header