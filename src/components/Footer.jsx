// src/components/Footer.jsx (UPDATED)
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* UPDATED CHURCH NAME */}
        <p>&copy; {currentYear} Catholic Church of the Presentation, Agility. All rights reserved.</p>
        <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a> | 
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        {/* UPDATED TO MASS TIMES */}
        <p>123 Main St, Agility, USA | Mass Times: Sun 9:00 AM & 11:00 AM</p>
      </div>
    </footer>
  );
};

export default Footer;