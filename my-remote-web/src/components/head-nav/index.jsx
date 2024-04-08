import React, { useState, useEffect } from "react";
import "./style.less";
import TeamIcon from "../../assets/images/Remote-icon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from "@fortawesome/free-solid-svg-icons";
import LinkMenuHead from "../linkMenuHead";

const HeadNav = () => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 700);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    function handleResize() {
      // 更新窄屏状态并在屏幕变宽时关闭菜单
      setIsNarrowScreen(window.innerWidth <= 830);
      if (window.innerWidth > 830) {
        setShowLinks(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleIconClick = () => {
    setShowLinks(prevState => !prevState);
  }

  return (
    <nav className="headNav">
      <div>
        <img src={ TeamIcon } alt="team-icon" className="team-icon" />
      </div>
      {isNarrowScreen && (
        <>
          {showLinks ? (
            <div>
              <LinkMenuHead className="navLinks" />
            </div>
          ) : (
            <FontAwesomeIcon icon={faList} className="fa-list-icon" onClick={handleIconClick} />
          )}
        </>
      )}
      {!isNarrowScreen && <LinkMenuHead className="navLinks"/>}
    </nav>
  );
}

export default HeadNav;