import React from "react";
import TeamMemberList from "../team-member-list";
import "./style.less";

const MainContent = ({ selectedRole }) => {
  return (
    <section>
      <TeamMemberList selectedRole={selectedRole}/>
    </section>
  )
}

export default MainContent;