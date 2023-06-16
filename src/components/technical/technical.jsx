import React from "react";
import "./technical.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { BsUnity } from "react-icons/bs";

const technical = () => {
  return (
    <section id="technical">
      <div className="tech_text">
        <h5>Technical Skills</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container technical_container">
        <div className="technical_frontend">
          <h3>Frontend Development</h3>
          <div className="tehnical_content">
            <article className="technical_details">
              <AiFillHtml5 className="technical_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="technical_details">
              <FaCss3 className="technical_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="technical_details">
              <DiJavascript1 className="technical_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="technical_details">
              <FaReact className="technical_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div> 

            {/* =====End of the Fronted====  */}

        <div className="technical_backend">
            <h3>Backend Development</h3>
            <div className="tehnical_content">
              <article className="technical_details">
                <FaNodeJs className="technical_details-icon" />
                <div>
                  <h4>NodeJS</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="technical_details">
                <TbBrandMysql className="technical_details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
          </div>
                  {/* ===== Backed end ==== */}
          <div className="technical_others">
            <h3>Other Technical Skills</h3>
            <div className="tehnical_content">
              <article className="technical_details">
                <SiCplusplus className="technical_details-icon" />
                <div>
                  <h4>C Program</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="technical_details">
                <FaJava className="technical_details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="technical_details">
                <SiAdobephotoshop className="technical_details-icon" />
                <div>
                  <h4>Photoshop</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="technical_details">
                <BsUnity className="technical_details-icon" />
                <div>
                  <h4>Unity Hub</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
          </div> 
      </div> 
    </section>
  );
};

export default technical;
