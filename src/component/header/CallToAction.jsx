import React from 'react'
import CV from '../../assests/cv.pdf'
const CallToAction = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" onClick={()=>document.getElementById("contactPage").click()} className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CallToAction