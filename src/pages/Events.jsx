// src/pages/Events.jsx
import React from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../data/events.json';

const Events = () => {
  // For a real app, you would filter to only show future events.
  // For now, we'll just display all of them.

  return (
    <div className="page-container">
      <h1 style={{ color: '#2c3e50', margin: '1.5rem', textAlign:'center' }}>Parish Events & Activities</h1>
      <p style={{ margin: '1.5rem', textAlign:'center' }}>
        Check out what's happening this week and connect with our community through our various ministries and groups.
      </p>

      <div className="event-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <p>Want to submit an event? <a href="/contact" style={{ color: '#e74c3c', textDecoration: 'none' }}>Contact the Parish Office.</a></p>
      </div>
    </div>
  );
};

export default Events;