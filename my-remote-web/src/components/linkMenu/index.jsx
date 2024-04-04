import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const LinkMenu = (props) => {
  return (
    <ul className={`linkMenu ${props.className}`}>
      <li><a href="/">Home</a></li>
      <li>
        <a href="/#/research">Research</a>
        <FontAwesomeIcon icon={faChevronDown} className="headIconSpace"/>
      </li>
      <li>
        <a href="/#/bio">People</a>
        <FontAwesomeIcon icon={faChevronDown} className="headIconSpace"/>
      </li>
      <li>
        <a href="/#/publication">Publication</a>
        <FontAwesomeIcon icon={faChevronDown} className="headIconSpace"/>
      </li>
      <li>
        <a href="/#/contact">Contact</a>
      </li>
    </ul>
  );
}

export default LinkMenu;