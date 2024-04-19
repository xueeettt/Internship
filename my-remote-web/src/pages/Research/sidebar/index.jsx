import React from "react";
import "./style.less";

const SidebarResearch = ({ researches, onResearchSelected}) => {

  return (
    <aside>
      <h1>Research</h1>
      <ul>
        {researches.map((research, index) => (
          <li key = {index} onClick={() => onResearchSelected(research)}>
            {research}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SidebarResearch;