import React from "react";
import "./style.less";

const LinkMenuBottom = () => {
  return (
    <div className="linkMenuBottom">
      <ul>
      <li><a href="/">Home</a></li>
      <li>
        <a href="/#/research">Research</a>
      </li>
      <li>
        <a href="/#/bio">People</a>
      </li>
      <li>
        <a href="/#/publication">Publication</a>
      </li>
      <li>
        <a href="/#/contact">Contact</a>
      </li>
    </ul>
    </div>
  )
}

export default LinkMenuBottom;