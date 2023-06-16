import React from 'react'
import './Others.css'
const Others = () => {
  return (
    <section id='Others'>
      <div className="container other_container">
        <div className="tech_text">
          <h5>Non-Technical</h5>
          <h2>Technical</h2>
        </div>
        <div className='other_details'>
          <article className='other_detail'> 
            <h2>Infosys</h2>
            <br />
            <h2>Infosys Springboard</h2>
            <br />
            <p>Internet of Things Hardware</p>
          </article>
          <article className='other_detail'> 
            <h2>Google</h2>
            <br />
            <h2>Digital Unlocked</h2>
            <br />
            <p>Introduction to Artificial Intelligence</p>
            <p>Fundamentals of Digital Marketing</p>
          </article>
          <article className='other_detail'> 
            <h2>TCS iON</h2>
            <br />
            <h2>Digital Learning Hub</h2>
            <br />
            <p> Introduction to Artificial Intelligence</p>
            <p> Communication Skills</p>
            <p>Interview Skills</p>
            <p> Career Edge - Knock down the Lockdown</p>
          </article>
        </div>
        <div className='other_btn'>
          <a href="/#curiculum" className='btn btn-primary'>Back</a>
        </div>
      </div>
    </section>
  )
}

export default Others