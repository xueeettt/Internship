import React from "react";
import { Link } from 'react-router-dom';
import "./style.less";

const MenuPage = ({ onMenuItemClick }) => {
  return (
    <div className="menu-display">
      <Link to="/" className="menu-item" onClick={onMenuItemClick}>Home</Link>
      <Link to="/research" className="menu-item" onClick={onMenuItemClick}>Research</Link>
      <Link to="/bio" className="menu-item" onClick={onMenuItemClick}>People</Link>
      <Link to="/publication" className="menu-item" onClick={onMenuItemClick}>Publication</Link>
      <Link to="/contact" className="menu-item" onClick={onMenuItemClick}>Contact</Link>
    </div>
  );
}

export default MenuPage;