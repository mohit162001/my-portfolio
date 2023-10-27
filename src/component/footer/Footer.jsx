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
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mohit.devade"><FaFacebookF/></a>
        <a href="https://www.instagram.com/mohitdevade/"><BsInstagram/></a>
        <a href="https://twitter.com/DYNAMIC47725257"><FaXTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DYNAMIC. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer