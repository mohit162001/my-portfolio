import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsTools} from 'react-icons/bs'
import {BiCodeAlt} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'


const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" id='homePage' onClick={()=>setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" id='aboutPage' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''} ><AiOutlineUser/></a>
      <a href="#skills" id='skillaPage' onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills' ? 'active':''}><BsTools/></a>
      <a href="#projects" id='projectPage' onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects' ? 'active':''}><BiCodeAlt/></a>
      <a href="#contact" id='contactPage' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav