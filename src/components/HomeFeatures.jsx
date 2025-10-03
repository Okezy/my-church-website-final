import React from 'react';
import { Link } from 'react-router-dom';
import './HomeFeatures.css';

// Mock Data for the Home Features Section
// In a real application, you would fetch this from an API
const mockData = {
  latestHomily: {
    title: "The Power of Patience in Prayer",
    preacher: "Fr. John Smith",
    date: "October 1, 2025",
    summary: "Reflecting on the Gospel of Luke, Father Smith discusses how true faith requires patience and unwavering persistence, using examples from the lives of the saints.",
    link: "/homilies/patience-in-prayer",
    image: "/homily-thumbnail.jpg" // Placeholder in public folder
  },
  upcomingEvent: {
    title: "Youth Group Retreat: Finding Your Vocation",
    date: "Saturday, November 9, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Parish Hall",
    description: "A day-long retreat for high school and college students focusing on discernment and the call to holiness in the modern world. Lunch provided.",
    link: "/events/youth-retreat",
    image: "/event-placeholder.jpg" // Placeholder in public folder
  }
};

const HomeFeatures = () => {
  const { latestHomily, upcomingEvent } = mockData;

  return (
    <section className="home-features-section">
      <div className="features-container">
        
        {/* --- Featured Homily Card --- */}
        <div className="feature-card homily-card">
          <img 
            src={latestHomily.image} 
            alt="Latest Homily" 
            className="card-image"
          />
          <div className="card-content">
            <span className="card-badge">Latest Homily</span>
            
            <h3 className="card-title">{latestHomily.title}</h3>
            
            <p className="card-details">
              By **{latestHomily.preacher}** on {latestHomily.date}
            </p>
            
            <p className="card-summary">{latestHomily.summary}</p>
            
            <Link to={latestHomily.link} className="feature-link primary-link">
              Watch Now &rarr;
            </Link>
          </div>
        </div>
        
        {/* --- Featured Event Card --- */}
        <div className="feature-card event-card">
          <img 
            src={upcomingEvent.image} 
            alt="Upcoming Event" 
            className="card-image"
          />
          <div className="card-content">
            <span className="card-badge">Upcoming Event</span>
            
            <h3 className="card-title">{upcomingEvent.title}</h3>
            
            <p className="card-details">
              {upcomingEvent.date} @ {upcomingEvent.time}
            </p>
            
            <p className="card-summary">
              **Location:** {upcomingEvent.location} - {upcomingEvent.description}
            </p>
            
            <Link to={upcomingEvent.link} className="feature-link secondary-link">
              View Details &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeFeatures;