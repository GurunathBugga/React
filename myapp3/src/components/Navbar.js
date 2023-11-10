import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Add the correct path to your CSS file
import logog from './images/logog.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          {/* <p className="Logo"> Guru</p> */}
          <img src={logog} alt="Logo" className="logog" /> 
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="search" placeholder="Search..." />
        <Link to="/cart">
          <i className="fa fa-shopping-cart"></i>
        </Link>
        <Link to="/account">
          <i className="fa fa-user"></i>
        </Link>
        <select className="navbar-language-selector">
          <option value="en">English</option>
          <option value="es">Kannada</option>
          <option value="fr">Hindi</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
