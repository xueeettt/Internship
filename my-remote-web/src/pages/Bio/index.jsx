import React, {useState} from "react";
import MainContent from "./main-content";
import Sidebar from "./sidebar";
import "./style.less";

const roles = ["PHD Candidate", "Post Doctor", "Student", "Team Member"];

const Bio = () => {

  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  }

  return (
    <div className="people-content">
      <Sidebar roles = {roles} onRoleSelected={handleRoleChange} />
      <MainContent selectedRole={selectedRole} />
    </div>
  );
}

export default Bio;