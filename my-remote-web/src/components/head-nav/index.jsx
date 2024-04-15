import React, { useEffect } from "react";
import "./style.less";
import TeamIcon from "../../assets/images/Remote-icon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";
import LinkMenuHead from "../linkMenuHead";

const HeadNav = ({ isNarrowScreen, handleMenuClick, showLinks }) => {

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 885) {
        handleMenuClick(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMenuClick]);

  return (
    <nav className="headNav">
      <div>
        <img src={TeamIcon} alt="team-icon" className="team-icon" />
      </div>
      {isNarrowScreen && (
        showLinks ? (
          <FontAwesomeIcon 
            icon={faXmark} 
            className="fa-list-icon" 
            onClick={() => handleMenuClick(false)}
          />
        ) : (
          <FontAwesomeIcon 
            icon={faList} 
            className="fa-list-icon" 
            onClick={() => handleMenuClick(true)}
          />
        )
      )}
      {!isNarrowScreen && <LinkMenuHead className="navLinks" />}
    </nav>
  );
};

export default HeadNav;