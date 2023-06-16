import React from 'react'
import './about.css'
import Me from '../../image/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserSecret} from 'react-icons/fa'
import {VscRootFolderOpened} from 'react-icons/vsc'
const about = () => {
  return (
   <section id="about">
      <div className='tech_text'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me_img">
            <img src={Me} alt="Me about"/>
          </div>
       </div>
       <div about_content>
         <div className="about_cards">
           <article className='about_card'>
             <FaAward className='about_icon'/>
             <h3>Experience</h3>
             <small>Fresher</small>
            </article>
            <article className='about_card'>
              <FaUserSecret className='about_icon'/>
              <h3>Leared Platforms</h3>
              <small>Own Learing</small>
            </article>
            <article className='about_card'>
              <VscRootFolderOpened className='about_icon'/>
              <h3>Projects</h3>
              <small>5+ Mini Projeccts</small>
            </article>
         </div>
          <h2 className='text1'>Career Objective:</h2>
          <p className='text2'>Looking for opportunities to incorporate my skills and training to help the company grow. I am looking forward to roles that will help me realize my potential by exploring the various aspects of this field.</p>
          <div className='button1'>
            <a href='#curiculum' className='btn btn-primary'>Education</a>
          </div>
      </div>
    </div>  
   </section>
  )
}

export default about