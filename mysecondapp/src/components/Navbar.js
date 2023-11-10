import React, { useState } from 'react';
import './Navbar.css';
import profileicon from './images/profileicon.avif';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
        <div className="logo">
            Travel
        </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
      <div className="profile-dropdown">
        <div className="profile-icon" onClick={toggleDropdown}>
           
          <img src={profileicon} alt="Profile" />
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
