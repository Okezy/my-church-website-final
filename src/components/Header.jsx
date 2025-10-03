// src/components/Header.jsx (COMPLETE CODE - Fixed Desktop Button Placement)
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // State to track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu after a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img 
            src="/church-logo.png" 
            alt="Catholic Church of the Presentation Logo" 
            className="header-logo"
          />
        </Link>
      </div>

      {/* Hamburger Button - Visible only on mobile/tablet */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {/* Simple placeholder for a close/hamburger icon */}
        {menuOpen ? '✕' : '☰'} 
      </button>

      {/* Navigation now contains ALL links and BOTH buttons (styled to hide/show based on view) */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          {/* Add onClick={closeMenu} to ensure menu closes after navigation */}
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/homilies" onClick={closeMenu}>Homilies</Link></li>
          <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        
        {/* GIVING BUTTON: Placed once inside NAV, styled to be desktop or mobile appropriate */}
        <a href="[EXTERNAL_GIVING_LINK]" target="_blank" rel="noopener noreferrer" className="giving-button">
            Give Online
        </a>

      </nav>
      
      {/* Removed the redundant desktop-only giving button from here */}
    </header>
  );
};

export default Header;