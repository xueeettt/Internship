import React from "react";
import "./style.less";

const Sidebar = ({ roles, onRoleSelected}) => {

  return (
    <div className="sideBarAside">
      <h1>People</h1>
      <ul>
        {roles.map((role, index) => (
          <li key = {index} onClick={() => onRoleSelected(role)}>
            {role}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;