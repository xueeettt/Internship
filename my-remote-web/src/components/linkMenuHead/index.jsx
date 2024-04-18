import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.less";

const LinkMenuHead = (props) => {
  return (
    <ul className="linkMenuHead">
      <li><a href="/">Home</a></li>
      <li>
        <a href="/#/research">Research</a>
        {/* <FontAwesomeIcon icon={faChevronDown} className="headIconSpace"/> */}
      </li>
      <li>
        <a href="/#/bio">People</a>
        {/* <FontAwesomeIcon icon={faChevronDown} className="headIconSpace"/> */}
      </li>
      <li>
        <a href="/#/publication">Publication</a>
        {/* <FontAwesomeIcon icon={faChevronDown} className="headIconSpace"/> */}
      </li>
      <li>
        <a href="/#/contact">Contact</a>
      </li>
    </ul>
  );
}

export default LinkMenuHead;