import React from 'react'
import './PG.css'
import esec from '../../image/esec.jpg'
const PG = () => {
  return (
    <section id='PG'>
      <div className="container ug_container">
        <div className="tech_text">
          <h5>Master of Computer Science</h5>
          <h2>M.C.A</h2>
        </div>
        <div className="ugDetails">
          <article className="ug_detail">
            <div className="college">
              <h2>Erode Sengunthar Engineering College, Erode</h2>
              <h3>Affiliated to Anna University, Chennai.</h3>
              <h3>Year : 2022 - 2024</h3>
              <h3>Grade : 9 Grade (Till First Semester)</h3>
            </div>
          </article>
          <article className="ug_detail"> 
            <h2>Co-Curricular Activities</h2>
            <ul>
              <li>Participated in Technical Event at "SHOWCARD DESIGNING" organized by Nandha Engineering College, Erode held on 23th November 2023 </li>
              <li>Participated in Workshop on "Learn Latest Skill" organized by Govt.of.India held on 29th December 2023.</li>
            </ul>
          </article>
          <article className="ug_detail">
            <img src={esec} alt="" />
          </article>
        </div>
        <div className="ug_button">
           <a href="/" className="btn btn-primary">Back</a>
        </div>
      </div>
    </section>
  )
}

export default PG