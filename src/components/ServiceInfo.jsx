// src/components/ServiceInfo.jsx (REVISED)
import React from 'react';
import './ServiceInfo.css';

const ServiceInfo = () => {
  return (
    <section className="service-info-section">
      <h2>Join Us for Holy Mass</h2>
      <div className="service-details">
        
        {/* DETAIL BOX 1: CONSOLIDATED MASS TIMES */}
        <div className="detail-box">
          <h3>Mass Times</h3>
          <p><strong>Sunday:</strong> 7:00 AM & 10:30 AM</p>
          <hr style={{ margin: '10px 0', border: '0', borderTop: '1px solid #eee' }} />
          <p><strong>Weekdays:</strong></p>
          <p>Mon, Tue, Thu, Sat: 6:30 AM</p>
          <p>Wed & Fri: 6:30 PM</p>
        </div>
        
        {/* DETAIL BOX 2: LOCATION (Remains the same as previous update) */}
        <div className="detail-box">
          <h3>Location</h3>
          <p>47/49 Aina Rd, Agiliti, Mile 12, Lagos</p>
          <p><a href="/contact">Get Directions & Parish Office Hours</a></p>
        </div>
        
        {/* DETAIL BOX 3: LIVE STREAM (Remains the same) */}
        <div className="detail-box">
          <h3>Live Stream</h3>
          <p>Can't make it? Join our 10:30 AM Sunday Mass online.</p>
          <p><a href="[YOUTUBE_LIVE_LINK]" target="_blank" rel="noopener noreferrer">Watch Live on YouTube</a></p>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;