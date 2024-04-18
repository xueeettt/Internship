import React from "react";
import "./style.less";

const Sidebar = ({ roles, onRoleSelected}) => {

  return (
    <aside>
      <h1>People</h1>
      <ul>
        {roles.map((role, index) => (
          <li key = {index} onClick={() => onRoleSelected(role)}>
            {role}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar;