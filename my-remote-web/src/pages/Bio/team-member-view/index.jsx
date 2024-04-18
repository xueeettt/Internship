import React from "react";
import "./style.less";

const TeamMemberView = (props) => {

  const renderAffiliations = (affiliations) => {
    if (Array.isArray(affiliations)) {
      if (affiliations.length === 1) {
        return <span>{affiliations[0]}</span>;
      }
      else {
        return <span>{affiliations.join(' & ')}</span>;
      }
    }
    else {
      return <span>{affiliations}</span>;
    }
  }  

  return (
    <div className="team">
      <ul>
        {props.data.map((member, index) => (
          <li key={index}>
            <div className="img-container">
              <img src={member.imagePath} alt={member.name}/>
            </div>
            
            <div className="name-position">
              <span>{member.name}</span>
              <span>{member.position}</span>
            </div>
            <div className="affiliations">
              {renderAffiliations(member.affiliations)}
            </div>
            
            <span>{member.bio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMemberView;