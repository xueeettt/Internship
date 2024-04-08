import React from "react";
import "./style.less";
import TeamIcon from "../../assets/images/Remote-icon.jpg";
import LinkMenuBottom from "../linkMenuBottom";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <div>
        <img src={ TeamIcon } alt="team-icon" className="team-icon" />
      </div>
      <LinkMenuBottom/>
    </div>

  )

}

export default BottomNav;