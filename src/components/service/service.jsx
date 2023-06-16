import React from 'react'
import './service.css'
import {BsCheck2All} from 'react-icons/bs'

const service = () => {
  return (
    <section id="service">
      <div className='tech_text'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <br />
      <div className="container services_container">
        <article>
          <div className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
          
           <ul className='service_list'>
              <li>
                <BsCheck2All className='service_list-icon'/>
                <p>Mobile App Page Design</p>
              </li>
              <li>
               <BsCheck2All className='service_list-icon'/>
               <p>Design Attractive Web Layout</p>
              </li>
              <li>
                <BsCheck2All className='service_list-icon'/>
                <p>User Experience Consulting</p>
              </li>
              <li>
                <BsCheck2All className='service_list-icon'/>
                <p>Animation Layout</p>
              </li>
              <li>
                <BsCheck2All className='service_list-icon'/>
                <p>Responsive Web Designing</p>
              </li>
            </ul>
          </div>
        </article>
               {/* End UI/UX */}
        <article>
          <div className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className='service_list'>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>UX/UI Design</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>E-Commerce Solution</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Website Architectures</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Web Maintenance</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Content Developer</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Web Designing and Manintance</p>
            </li>
          </ul>
          </div>
          
        </article>
          {/* End Web Development */} 
          <article>
          <div className='service'>
            <div className="service_head">
              <h3>Game Development</h3>
            </div>
            <ul className='service_list'>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Basic 2D Game</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>2D Animated Games</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Unity Hub</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Charater Dessgin</p>
            </li>
            <li>
              <BsCheck2All className='service_list-icon'/>
              <p>Backgorund Desgin</p>
            </li>
          </ul>
          </div>
          
        </article>
          {/* End Content Creation */} 
      </div>
    </section>
  )
}

export default service