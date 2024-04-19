import React from "react";
import "./style.less";

const ResearchView = (props) => {
  const research = props.data[0];
  return (

    <div className="research">
      <h2>{research.name}</h2>
      <div className="image-container">
        <img src={research.imagePath} alt={research.name}/>
      </div>
      <p>
        {research.content}
      </p>
    </div>
  )
}

export default ResearchView;