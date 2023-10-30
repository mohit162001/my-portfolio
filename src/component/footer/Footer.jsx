import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">DYNAMIC</a>

      <ul className="section__links">
        <li><a href="#" onClick={()=>document.getElementById("homePage").click()}>Home</a></li>
        <li><a href="#about" onClick={()=>document.getElementById("aboutPage").click()}>About</a></li>
        <li><a href="#skills" onClick={()=>document.getElementById("skillsPage").click()}>Skills</a></li>
        <li><a href="#projects" onClick={()=>document.getElementById("projectPage").click()}>Projects</a></li>
        <li><a href="#contact" onClick={()=>document.getElementById("contactPage").click()}>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mohit.devade" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/mohitdevade/" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/DYNAMIC47725257" target='_blank'><FaXTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DYNAMIC. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer