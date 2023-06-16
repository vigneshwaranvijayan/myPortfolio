import React from 'react'
import './curiculum.css'
import GA from '../../image/GR.jpg'


const curiculum = () => {
  return (
    <section id='curiculum'>
        <div className='tech_text'>
          <div className='tech_text-bac'>
            <h5>My Activites</h5>
            <h2>Co-Curricular</h2><br />
            <div className='tech-img'>
              <img src={GA} alt="" />
            </div>
            <br />
            <div className="curiculum_button">
              <div>
                <a href="/ug#UG" className='btn'>UG</a>
              </div>
              <div>
                <a href="/pg#PG" className='btn btn-primary'>PG</a>
              </div>
              <div>
                <a href="/other#Others" className='btn'>Others</a>
              </div>
            </div>
          </div> 
          <div>
            
          </div>
        </div>  
    </section>
  )
}

export default curiculum