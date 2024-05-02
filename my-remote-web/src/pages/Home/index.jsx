import {React} from "react";
import { useNavigate } from 'react-router-dom';
import MissionBackgroundImg from "../../assets/images/mission-background-pic.jpg";
import Project1Img from "../../assets/images/project-1.jpg";
import Team from "../../assets/images/team.png";
import Citation from "../../components/citation";
import GoogleMap from "../../components/google-map";
import "./style.less";

const Home = () => {

  const goToResearch = () => {
    navigate('/research');
  }

  const goToPeople = () => {
    navigate('/bio');
  }

  // const [selectedResearch, setSelectedResearch] = useState(null);
  const navigate = useNavigate();

  const navigateToResearch = (researchName) => {
    navigate(`/research?researchName=${researchName}`, { replace: true });
    // setSelectedResearch(researchId);
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
        
        <div className="presentation-text">
          <h2>Presentation of the REMOD Lab</h2>
          <p>
            The REMOD Lab stands at the forefront of regenerative engineering and modeling in the realm of osteochondral disease. Osteochondral conditions, which affect the integrity of both cartilage and underlying bone, present significant challenges in orthopedic medicine. Our lab is dedicated to confronting these challenges head-on through a multifaceted approach that leverages expertise from diverse fields. 
          </p>
          <ul>
            <li onClick = {() => navigateToResearch('Programmed oxygen environments for enhance engineered cartilage')}>
              <img src={Project1Img} alt="" className="project"/>
            </li>
            <li onClick = {() => navigateToResearch('Programmed oxygen environments for enhance engineered cartilage_1')}>
              <img src={Project1Img} alt="" className="project"/>
            </li>
            <li onClick = {() => navigateToResearch('Research Replace 3')}>
              <img src={Project1Img} alt="" className="project"/>
            </li>
            <li onClick = {() => navigateToResearch('Research Replace 4')}>
              <img src={Project1Img} alt="" className="project"/>
            </li>
          </ul>
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
      <Citation/>
      <div className="info-container">
        <div className="map">
          <GoogleMap apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} />
        </div>
        
        <ul>
          <li style={{fontSize: '40px', color: 'white'}}>Links</li>
          <li><a href="https://acmd.org.au/">ACMD</a></li>
          <li><a href="https://services.unimelb.edu.au/health/">Health Center University of Melbourne</a></li>
        </ul>

      </div>
    </div>

  )
}

export default Home;