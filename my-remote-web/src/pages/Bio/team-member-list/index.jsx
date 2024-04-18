import React, { useState, useEffect } from "react";
import api from "../../../api";
import TeamMemberView from "../team-member-view";

const TeamMemberList = ( selectedRole ) => {
  
  const [memberList, setMemberList] = useState([]);
  console.log(selectedRole);
  

  useEffect(() => {
    api.getTeamBio().then(res => {
      if (res.status === 200) {
        const filteredMembers = res.data.filter(member => 
          member.position === selectedRole.selectedRole
        );
        setMemberList(filteredMembers);
      }
    });
  }, [selectedRole]);


  return (
    <div>
      {
        memberList.length > 0 ?
        (<TeamMemberView data = {memberList}/>) : (
          <div>NO CONTENT</div>
        )
      }
    </div>
  );
}

export default TeamMemberList;
