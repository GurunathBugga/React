import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Travel</div>
      <ul className="navbar-links">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/aboutus">About Us</a></li>
        <li className="navbar-item"><a href="/products">Products</a></li>
      </ul>
      <button className="signup-button" ><a href="/SignUp">Sign Up</a></button>
      <button className="LoginButton"><a href="/Form">Login</a></button>
    </nav>
  );
}

export default Navbar;
