import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainContentResearch from "./main-content";
import SidebarResearch from "./sidebar";
import api from "../../api";
import "./style.less";

const Research = () => {
  const [researches, setResearches] = useState([]); 
  const [selectedResearch, setSelectedResearch] = useState('');
  const [searchParams] = useSearchParams();
  const researchName = searchParams.get('researchName');
  // console.log(researchName);

  useEffect(() => {
    
    api.getResearchInfo().then(res => {
      if (res.status === 200) {
        const names = res.data.map(item => item.name);
        setResearches(names);
        // console.log(researchName);
        if (researchName && names.includes(researchName)) {
          setSelectedResearch(researchName);
          
        } else if (names.length > 0) {
          setSelectedResearch(names[0]);
        }
      }
    });
  }, [researchName, researches]);

  const handleResearchSelected = (research) => {
    setSelectedResearch(research);
  };

  return (
    <div className="research-content">
      <SidebarResearch researches={researches} onResearchSelected={handleResearchSelected} className="sidebar" />
      <MainContentResearch selectedResearch={selectedResearch} className="main" />
    </div>
  );
};

export default Research;