import React from "react";
import "./style.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Publication = () => {

  const years = [];
  for (let year = 2024; year >= 2013; year--) {
    years.push(
      <div className="publication-container">
        <FontAwesomeIcon icon={faPlus} className="publication-icon" />
        <span>{year}</span>
        <div className="divider"></div>
      </div>
    );
  }

  return (
    <div className="publication">
      <h1>Publication</h1>
      <div className="divider"></div>
        {years}
    </div>
  )
}

export default Publication;