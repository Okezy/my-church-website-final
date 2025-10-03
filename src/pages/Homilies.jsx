// src/pages/Homilies.jsx
import React from 'react';
import HomilyCard from '../components/HomilyCard';
import homiliesData from '../data/sermons.json'; // Renamed import, but file content is the data

const Homilies = () => {
  // Sort homilies by date (most recent first)
  const sortedHomilies = homiliesData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="page-container">
      <h1 style={{ color: '#2c3e50', margin: '1.5rem', textAlign:'center' }}>Homily Archive</h1>
      <p style={{ margin: '1.5rem', textAlign:'center'}}>
        Listen to or watch past homilies from our parish priests. May they inspire and guide your faith journey.
      </p>

      <div className="homily-list">
        {sortedHomilies.map((homily) => (
          <HomilyCard key={homily.id} homily={homily} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <p>Looking for an older homily? Please contact the parish office.</p>
      </div>
    </div>
  );
};

export default Homilies;