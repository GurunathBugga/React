import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';
// import profileicon from './images/profileicon.avif';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <ul className="sidebar-menu">
        <div className="image2">
        {/* <img src={profileicon} alt="Profile" /> */}
        </div>
        <ul>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/Register">Register</Link>
      </li>
      <li>
        <Link to="/refer">Refer</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </ul>
        
      </ul>
    </div>
  );
};

export default Sidebar;
