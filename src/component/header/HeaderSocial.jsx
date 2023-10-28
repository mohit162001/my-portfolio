import React from 'react';
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mohit-devade-a6a422201/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/mohit162001" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/mohitdevade/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial;