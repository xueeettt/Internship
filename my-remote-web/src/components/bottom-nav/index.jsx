import React from "react";
import "./style.less";
import TeamIcon from "../../assets/images/Remote-icon.jpg";
import LinkMenuBottom from "../linkMenuBottom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <div className="team-icon-container">
        <img src={ TeamIcon } alt="team-icon" className="team-icon" />
        <LinkMenuBottom/>
      </div>
      <div className="info-list">
        <div className="info">
          <FontAwesomeIcon icon={faLocationDot} />
          29 Regent St, Fitzroy VIC 3065
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faEnvelope} />
          serena.duchi@gmail.com
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faPhone} />
          +61 0000000000
        </div>
      </div>
    </div>
  );
}

export default BottomNav;