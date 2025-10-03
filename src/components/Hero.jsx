// src/components/Hero.jsx (UPDATED)
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        
        {/* New H2 - Welcome to */}
        <h2 className="hero-welcome-text">
          <i style={{ fontStyle: 'italic' }}>Welcome to</i>
        </h2>

        {/* New H1 - Church Name */}
        <h1>Catholic Church Of Presentation</h1>

        <p>Gathering to worship, growing in faith, serving our world.</p>
        
        <div className="hero-actions">
          <a href="/about" className="cta-button primary">New Here? Plan Your Visit</a>
          {/* Updated button text to Homily */}
          <a href="/homilies" className="cta-button secondary">Watch Latest Homily</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;