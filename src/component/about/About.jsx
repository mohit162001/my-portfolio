import React from 'react';
import './about.css';
import Me from '../../assests/about_me.jpg';
import {FaUserAstronaut} from 'react-icons/fa';
import {BiCodeAlt} from 'react-icons/bi';
import {BsPersonWorkspace} from 'react-icons/bs';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="my_image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              < BsPersonWorkspace className='about__icon'/>
              <h5>Internship</h5>
              <small>Web Development Intership</small>
            </article>

            <article className='about__card'>
              < FaUserAstronaut className='about__icon'/>
              <h5>Fresher</h5>
              <small>React Developer</small>
            </article>

            <article className='about__card'>
              <BiCodeAlt className='about__icon'/>
              <h5>Projects</h5>
              <small>Projects Completed</small>
            </article>
          </div>
          <p>
          Enthusiastic and dedicated web developer fresher with a solid foundation in HTML, CSS, and JavaScript, along with proficiency in React.js. Eager to contribute my skills to create engaging and user-friendly web experiences.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About