// src/components/ContactInfo.jsx (FINAL CORRECTED CODE)
// FIX: Removed explicit 'import React' as it's handled implicitly by Vite/React 18+
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <section className="contact-details">
        <h2>Parish Contact Details</h2>
        <div className="detail-group">
          <p><strong>Parish Office:</strong></p>
          {/* UPDATED ADDRESS */}
          <p>47/49 Aina Rd, Agiliti, Mile 12, Lagos</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: <a href="mailto:office@ccp-agility.org">office@ccp-agility.org</a></p>
        </div>
        
        <div className="detail-group">
          <p><strong>Mass Times:</strong></p>
          <p><strong>Sunday:</strong> 7:00 AM & 10:30 AM</p>
          <p><strong>Mon, Tue, Thu, Sat:</strong> 6:30 AM</p>
          <p><strong>Wed & Fri:</strong> 6:30 PM</p>
          <p><strong>Confession:</strong> Saturdays 4:00 PM - 4:45 PM (Example)</p>
        </div>
      </section>

      {/* This is a placeholder for an embedded map (e.g., Google Maps iframe) */}
      <section className="map-embed">
        <h2>Our Location</h2>
        {/* NOTE: You should replace the 'src' attribute below with a real Google Maps embed code
               for '47/49 Aina Rd, Agiliti, Mile 12, Lagos' before final deployment. */}
        <iframe
          title="Church Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.00!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzI3LjkiTiA3NMKwMDYnMTkuNiJX!5e0!3m2!1sen!2sus!4v1600000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactInfo;