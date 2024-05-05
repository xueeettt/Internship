import React, { useState, useEffect } from "react";
import "./style.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import api from "../../api";
import PaperView from "./paper-view";

const Publication = () => {
  const [papers, setPapers] = useState([]);
  const [yearsContent, setYearsContent] = useState([]);
  const [expandedYears, setExpandedYears] = useState({});

  useEffect(() => {
    api.getPapers().then(res => {
      if (res.status === 200) {
        setPapers(res.data);
      }
    });
  }, []);

  useEffect(() => {
    const years = [];
    for (let year = 2024; year >= 2013; year--) {
      const yearStr = year.toString();
      const filteredPapers = papers.filter(paper => paper.year === yearStr);

      years.push(
        <div key={year} className="publication-container">
          <FontAwesomeIcon 
            icon={expandedYears[year] ? faMinus : faPlus} 
            className="publication-icon" 
            onClick={() => toggleYear(year)}
          />
          <span>{year}</span>
          {expandedYears[year] && (
            <div className="paperList">
              {filteredPapers.map(paperItem => (
                <PaperView key={paperItem.name} data={paperItem} />
              ))}
            </div>
          )}
          <div className="divider"></div>
        </div>
      );
    }
    setYearsContent(years);
  }, [papers, expandedYears]);

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <div className="publication">
      <h1>Publication</h1>
      <div className="divider"></div>
      {yearsContent}
    </div>
  );
};

export default Publication;