import React, {useRef} from 'react'
import './Contact.css'
import {BiMailSend} from 'react-icons/bi'
import {CiInstagram} from 'react-icons/ci'
import {FaWhatsapp} from 'react-icons/fa' 
import emailjs from 'emailjs-com'

const Contact = () => {
  const from = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bbcj596', 'template_d1xxfy5', from.current, '1V2V0eS6eBGTEPj8J')
    e.target.reset(alert("Submit Successfully"))
  };
  return (
    <section id="contact">
      <div className='tech_text'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <br />
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
              <BiMailSend className='contact_option_icon email_icon'/>
            <h4>Email</h4>
            <h5>vvigneshwaranmca@gmail.com</h5>
            <a href="mailto: vvigneshwaranmca@gmail.com" target="_blank" rel="noreferrer">Send a message</a> 
          </article>
          <article className='contact_option'>
              <CiInstagram className='contact_option_icon inst_icon'/>
            <h4>Messenger</h4>
            <h5>Instagram</h5>
            <a href="https://www.instagram.com/invites/contact/?i=1jdjb0yy0po6z&utm_content=3l5tczd" target="_blank" rel="noreferrer">Send a message</a> 
          </article>
          <article className='contact_option'>
              <FaWhatsapp className='contact_option_icon whatsApp_icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8189840059</h5>
            <a href="https://wa.me/91818940059" target="_blank" rel="noreferrer"  >Send a message</a> 
          </article>
        </div>
           {/* === End Option ===== */}
           <form ref={from} onSubmit={sendEmail}>
              <input type="text" placeholder='Your Full Name' name='name' required/>
              <input type="email" placeholder='Your Email' name='email' required/>
              <textarea name="message" rows="7" placeholder='Your Maessage' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
      </div>
    </section>
  )
}

export default Contact