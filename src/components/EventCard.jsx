// src/components/EventCard.jsx
import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const { name, date, time, location, description, type } = event;

  return (
    <div className={`event-card ${type.toLowerCase()}`}>
      <div className="event-type-badge">{type}</div>
      <h3>{name}</h3>
      <p className="date-time">
        🗓️ {date} at {time}
      </p>
      <p className="location">
        📍 {location}
      </p>
      <p className="description">{description}</p>
      <button className="rsvp-button">RSVP / Learn More</button>
    </div>
  );
};

export default EventCard;