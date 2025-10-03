// src/pages/About.jsx (COMPLETE CODE)
import React from 'react';
// Check that your components folder is named exactly 'components'
import MissionCard from '../components/MissionCard'; 
import LeadershipSection from '../components/LeadershipSection'; 

const About = () => {
  return (
    // Added padding for desktop and mobile visibility
    <div className="page-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '1rem', textAlign: 'center' }}>
        Our Story and Mission
      </h1>
      <p style={{ marginBottom: '3rem', fontSize: '1.1rem', textAlign: 'center', color: '#555' }}>
        Catholic Church of the Presentation, Agility, has been serving the community for over 50 years. We invite you to explore our core beliefs and meet our leaders.
      </p>

      {/* These must match the component names exported below */}
      <MissionCard />
      <LeadershipSection />

      <div style={{ marginTop: '3rem', padding: '2rem', borderTop: '1px solid #ddd', textAlign: 'center' }}>
        <h2 style={{ color: '#e74c3c' }}>Ready to Visit?</h2>
        <p style={{ marginBottom: '1.5rem' }}>Find out what to expect on your first Sunday with us.</p>
        <a 
          href="/contact" 
          style={{ padding: '0.75rem 2rem', backgroundColor: '#e74c3c', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}
        >
          Plan Your Visit Now
        </a>
      </div>
    </div>
  );
};

export default About;