import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>At Travel, we're dedicated to making your travel dreams come true. Explore the world with us and create memories that last a lifetime.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@travel.com</p>
          <p>Phone: +919620835922</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
