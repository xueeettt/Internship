import React from "react";
import "./style.less";

const PaperView = (props) => {

  const handleOnClick = () => {
    window.location.href = props.data.link;
  }

  return (
    <div className="paper">
      <div className="paper-link" onClick={handleOnClick}>
        <div className="paper-name">
          {props.data.name}
        </div>
      </div>
      <div className="paper-info">
        {props.data.info}
      </div>
    </div>
  )
}

export default PaperView;