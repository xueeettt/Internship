import {React, useEffect, useState} from "react";
import CitationPic from "../../assets/images/citation-background.jpg";
import "./style.less";

const authorIds = '20336614400';
const apiKey = process.env.REACT_APP_PAPER_METRIC_KEY;

const fetchMetrics = async (metricType) => {

  console.log('API Key:', process.env.REACT_APP_PAPER_METRIC_KEY);

  const url = `https://api.elsevier.com/analytics/scival/author/metrics?metricTypes=${metricType}&authors=${authorIds}&yearRange=10yrs&includeSelfCitations=true&byYear=false&includedDocs=AllPublicationTypes&journalImpactType=CiteScore&showAsFieldWeighted=false&indexType=hIndex&apiKey=${apiKey}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'X-ELS-APIKey': apiKey
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${metricType} metrics`);
  }
  const data = await response.json();
  if (data && data.results && data.results.length > 0 && data.results[0].metrics.length > 0) {
    return data.results[0].metrics[0].value;
  }
  return 0;
};
  
const Citation = () => {
  const [citationCount, setCitationCount] = useState(0);
  const [scholarlyOutput, setScholarlyOutput] = useState(0);
  const [citationsPerPublication, setCitationPerPublication] = useState(0);
  const [hIndex, setHIndex] = useState(0);

  useEffect(() => {
    // Fetch Scholarly Output
    fetchMetrics('ScholarlyOutput').then(setScholarlyOutput).catch(error => {
      console.error('Error fetching Scholarly Output:', error);
    });

    // Fetch Citation Count
    fetchMetrics('CitationCount').then(setCitationCount).catch(error => {
      console.error('Error fetching Citation Count:', error);
    });

    // Fetch Citation Per Publication Count
    fetchMetrics('CitationsPerPublication').then(setCitationPerPublication).catch(error => {
      console.error('Error fetching Citation Per Publication Count:', error);
    });

    // Fetch H-Index
    fetchMetrics('HIndices').then(setHIndex).catch(error => {
      console.error('Error fetching H-Index:', error);
    })
  }, []);

  return (
    <div className="citation">
      <img src={CitationPic} alt="" className="citation-background"/>
      <div className="translucent-blue-box">
        <div className="citation-text">
          <h2>{scholarlyOutput}</h2>
          <h2>Scholarly Output</h2>
        </div>
        <div className="citation-text">
          <h2>{citationCount}</h2>
          <h2>Citation Count</h2>
        </div>
        <div className="citation-text">
          <h2>{citationsPerPublication.toFixed(2)}</h2>
          <h2>Citation Per Publication</h2>
        </div>
        <div className="citation-text">
          <h2>{hIndex}</h2>
          <h2>H-Index</h2>
        </div>
      </div>
    </div>
  );
}

export default Citation;