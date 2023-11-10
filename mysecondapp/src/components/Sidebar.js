import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';
import profileicon from './images/profileicon.avif';

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
        <img src={profileicon} alt="Profile" />
        </div>
        <li>Profile</li>
        <li>Settings</li>
        <li>Freinds</li>
        <li>UserData</li>
        <li>Refer</li>
        <li>Logout</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
