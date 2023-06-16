import React from 'react'
import './fooder.css'
import {CiFacebook} from 'react-icons/ci'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
const fooder = () => {
  return (
     <footer>
        <a href="/" className='footer_logo'>Vignesh</a>
        
        <ul className='permalinks'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portfolio">Works</a></li>
          <li><a href="#test">Technical</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_soial">
          <a href="www.facebook.com"><CiFacebook/></a>
          <a href='https://www.linkedin.com/in/vigneshwaran-v-84a5801b0'><BsLinkedin/></a>
          <a href='https://www.instagram.com/invites/contact/?i=1jdjb0yy0po6z&utm_content=3l5tczd'><AiOutlineInstagram/></a>
          <a href="www.twitter.com"><AiFillTwitterSquare/></a>
        </div>
        <div className="footer_copyright">
          <small>&copy; Vignesh2023. All right reserved.</small>
        </div>
     </footer>
  )
}

export default fooder