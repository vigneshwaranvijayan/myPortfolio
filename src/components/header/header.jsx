import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../image/MeBack.png'
import HeaderSocial from './hearderSocial'
import {GiFlamingArrow} from 'react-icons/gi'

const header = () => {
  return (
    <section id='header'>
      <div className="container header_container">
        <article className='hed_img'>
          <div className="me">
            <img src={ME} alt="me" srcset="" />
          </div>
        </article>
        <article className='hed_containers'>
          <h5>Hello I'm</h5><br />
          <h1>Vigneshwaran v</h1> <br />
          <div className='head_text'>
            <div class="scroller">
              <span>
                  Web Developer<br/>
                  Backend Developer<br/>
                  Full Stack Developer<br/>
                  Game Developer
              </span>
            </div>
          </div>
          <CTA/><br />
          <HeaderSocial/><br />
          <div className='scroll_down'>
            <a href='#contact' className='scroll-down'><GiFlamingArrow/> Scroll Down</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default header