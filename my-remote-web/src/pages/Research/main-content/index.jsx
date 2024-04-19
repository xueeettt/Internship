import React from "react";
import "./style.less";
import ResearchList from "../research-list";

const MainContentResearch = ({ selectedResearch }) => {
  return (
    <section>
      <ResearchList selectedResearch={selectedResearch}/>
    </section>
  )
}

export default MainContentResearch;