import React from "react";
import CitationPic from "../../assets/images/citation-background.jpg";
import "./style.less";

const Citation = () => {
  return (
    <div className="citation">
      <img src={CitationPic} alt="" className="citation-background"/>
      <div className="translucent-blue-box">
        <div className="citation-text">
          <h2>956</h2>
          <h2>Citation Count</h2>
        </div>
        <div className="citation-text">
          <h2>24</h2>
          <h2>H-Index</h2>
        </div>
        <div className="citation-text">
          <h2>30.7</h2>
          <h2>Citation per Publication</h2>
        </div>
        <div className="citation-text">
          <h2>38</h2>
          <h2>Scholarly Output</h2>
        </div>
      </div>
    </div>
  )
}

export default Citation;