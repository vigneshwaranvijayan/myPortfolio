import React from "react";
import "./UG.css";
import VC1 from '../../image/VC.jpg'


const UG = () => {
  return (
    <section id="UG">
      <div className="container ug_container">
        <div className="tech_text">
          <h5>Bachelor of Science</h5>
          <h2>B.Sc., Physics</h2>
        </div>
        <div className="ugDetails">
          <article className="ug_detail">
            <div className="college">
              <h2>Vivekananda College, Madurai.</h2>
              <h3>Affiliated to Madurai Kamaraj University, Madurai</h3>
              <h3>Year : 2019 - 2022</h3>
              <h3>Grade : 8.6 GPA</h3>
              <h3>First Class with distinction</h3>
            </div>
          </article>
          <article className="ug_detail"> 
            <h2>Co-Curricular Activities</h2>
            <ul>
              <li>Participated in Online Workshop on "Scientific Commuication " organized by CSIR-National Physical Laboratory, New Delhi held on March, 25th - 26th, 2022.</li>
              <li>Participated in Online Workshop on "CHARACTERIZATION TECHIQUE OF MATERIAL AND DEVICE" organized by CSIR-National Physical Laboratory, New Delhi held on March, 14th - 15th, 2022.   </li>
              <li>Participated in "PHYSICS TRAINING AND TALENT SEARCH (PTTS 2021)" sponsored by Infosys Science Foundation Hosted by Ahmedabad University, Gujarat, held on 25.05.2021 – 06.06.2021.</li>
              <li>Participated in Peer group discussion impact of "NANO IN FUTURE" Organised by VVV College, Virudhunagar and Vivekananda College, Madurai, held on 09.10.2021</li>
              <li>Participated in Webinar on "Career Opportunites for Physics" organized by Deparment of Physics, Vivekananda College held on 22.06.2020</li>
            </ul>
          </article>
          <article className="ug_detail">
            <img src={VC1} alt="Logo" srcset="" />
          </article>
        </div>
        <div className="ug_button">
           <a href="/" className="btn btn-primary">Back</a>
        </div>
      </div>
    </section>
  );
};

export default UG;
