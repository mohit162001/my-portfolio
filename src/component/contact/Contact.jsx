import React, { useRef }  from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi';
import {BsInstagram,BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvmm344', 'template_l5hm1xw', form.current, 'C34zptAsRL5cdM-ge')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__iocn'/>
            <h4>Email</h4>
            <h5>mohit.devade123@gmail.com</h5>
            <a href="mailto:mohit.devade123@gmail.com" target='_blank'>Sent a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__iocn'/>
            <h4>Instagram</h4>
            <h5>mohitdevade</h5>
            <a href="https://ig.me/mohitdevade/" target='_blank'>Sent a message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__iocn'/>
            <h4>WhatsApp</h4>
            <h5>+91 8109210584</h5>
            <a href="https://api.whatsapp.com/send?phone=8109210584"  target='_blank'>Sent a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact