import React, {useState} from "react";
import MainContentResearch from "./main-content";
import SidebarResearch from "./sidebar";
import "./style.less";

const researches = ["Programmed oxygen environments for enhance engineered cartilage",
"Programmed oxygen environments for enhance engineered cartilage_1","research_3"];

const Research = () => {

  const [selectedResearch, setSelectedResearch] = useState(researches[0]);

  const handleResearchSelected = (research) => {
    setSelectedResearch(research);
  }

  return (
    <div className="research-content">
      <SidebarResearch researches = {researches} onResearchSelected={handleResearchSelected} />
      <MainContentResearch selectedResearch={selectedResearch} />
    </div>
  );
}

export default Research;