// src/components/MissionCard.jsx (PLACEHOLDER)
import React from 'react';

const MissionCard = () => {
  const values = [
    { title: "Worship", description: "Fostering deep communion with God through the Sacraments and prayer." },
    { title: "Service", description: "Responding to Christ's call to love our neighbor through charity and action." },
    { title: "Community", description: "Building a supportive family of faith where all are welcome and belong." }
  ];

  return (
    <div style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h2 style={{ color: '#e74c3c', marginBottom: '2rem' }}>Our Core Values</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
        {values.map((item, index) => (
          <div key={index} style={{ 
            flex: '1 1 30%', 
            padding: '20px', 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)', 
            minWidth: '250px' 
          }}>
            <h3 style={{ color: '#2c3e50' }}>{item.title}</h3>
            <p style={{ color: '#555' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionCard;