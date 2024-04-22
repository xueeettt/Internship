import React from "react";
import MissionBackgroundImg from "../../assets/images/mission-background-pic.jpg";
import Project1Img from "../../assets/images/project-1.jpg";
import Team from "../../assets/images/team.png";
import Citation from "../../assets/images/citation-background.jpg";
import "./style.less";

const Home = () => {

  const goToResearch = () => {
    window.location.href = "/#/research";
  }

  const goToPeople = () => {
    window.location.href = "/#/bio";
  }

  return (
    <div>
      <div className="mission">
        <img src={MissionBackgroundImg} alt="" className="mission-pic"/>
        <div className="translucent-red-box">
          <h2>Our Mission</h2>
          <p>
            The REMOD Lab is committed to advancing the field of regenerative engineering and modeling of osteochondral disease through innovative research, interdisciplinary collaboration, and translation of scientific discoveries into clinical applications. 
          </p>
        </div>
      </div>
      <div className="presentation">
        <img src={Project1Img} alt="" className="project"/>
        <div className="presentation-text">
          <h2>Presentation of the REMOD Lab</h2>
          <p>
            The REMOD Lab stands at the forefront of regenerative engineering and modeling in the realm of osteochondral disease. Osteochondral conditions, which affect the integrity of both cartilage and underlying bone, present significant challenges in orthopedic medicine. Our lab is dedicated to confronting these challenges head-on through a multifaceted approach that leverages expertise from diverse fields. 
          </p>
          <h2>Key Focus Areas</h2>
          <p>
            <ul>
              <li>
                Regenerative Therapies: We investigate novel regenerative therapies aimed at promoting the repair and regeneration of damaged cartilage and bone tissues. By harnessing the body's innate regenerative capacity and developing advanced biomaterials and scaffolds, we strive to create innovative solutions for tissue repair and functional restoration. 
              </li>
              <li>
                Engineering Solutions: Our lab employs principles of engineering to design and optimize biomaterials, implants, and tissue-engineered constructs for osteochondral regeneration. Through computational modeling, biomechanical analysis, and additive manufacturing techniques, we develop customized solutions tailored to individual patient needs. 
              </li>
              <li>
                Disease Modeling: We utilize advanced modeling techniques, including computational simulations and in vitro/ex vivo models, to gain insights into the pathophysiology of osteochondral diseases. By elucidating disease mechanisms and exploring therapeutic targets, we aim to develop more effective interventions for disease prevention and treatment. 
              </li>
              <li>
                Translation and Clinical Impact: At the REMOD Lab, we are committed to translating our scientific discoveries into clinical applications that directly benefit patients. Through collaborative partnerships with clinicians and industry stakeholders, we strive to accelerate the translation of promising technologies from the bench to the bedside. 
              </li>
            </ul>
          </p>
          <button className="button" onClick={goToResearch}>GO TO OUR RESEARCH</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="content2">
        <div className="content2-text">
          <h2>Collaborative Environment</h2>
          <p>
            Our lab fosters a dynamic and collaborative environment where researchers from various disciplines come together to tackle complex scientific challenges. We believe in the power of interdisciplinary collaboration to drive innovation and accelerate progress towards our shared goals. </p>
          <h2>Vision for the Future</h2>
          <p>
            As we look to the future, the REMOD Lab is dedicated to pushing the boundaries of regenerative engineering and modeling to revolutionize the diagnosis, treatment, and management of osteochondral diseases. Through our relentless pursuit of scientific excellence and commitment to improving patient outcomes, we aspire to make a lasting impact in the field of orthopedic medicine and beyond.
          </p>
          <button className="button" onClick={goToPeople}>MEET OUR PEOPLE</button>
        </div>
        <img src={Team} alt="" className="team-pic"/>
      </div>
      <div className="citation">
        <img src={Citation} alt="" className="citation-background"/>
        <div className="translucent-blue-box">
          <div className="citation-text">
            <h2>65</h2>
            <h2>Citation Count</h2>
          </div>
          <div className="citation-text">
            <h2>65</h2>
            <h2>H-Index</h2>
          </div>
          <div className="citation-text">
            <h2>65</h2>
            <h2>Citation per Publication</h2>
          </div>
          <div className="citation-text">
            <h2>65</h2>
            <h2>Scholarly Output</h2>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Home;