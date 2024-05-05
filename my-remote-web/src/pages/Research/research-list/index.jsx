import React, { useState, useEffect } from "react";
import api from "../../../api";
import ResearchView from "../research-view";

const ResearchList = ( selectedResearch ) => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    api.getResearchInfo().then(res => {
      console.log(res);
      if (res.status === 200) {
        const filteredResearch = res.data.filter(research => research.name === selectedResearch.selectedResearch);
        // console.log(filteredResearch);
        setResearch(filteredResearch);
      };
    });
  },[selectedResearch]);

  return (
    <div>
      {
        research.length > 0 ?
        (<ResearchView data = {research}/>) : (
          <div>NO CONTENT</div>
        )
      }
    </div>
  )
}

export default ResearchList;