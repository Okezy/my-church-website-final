// src/components/SimpleForm.jsx
import React, { useState } from 'react';
import './SimpleForm.css';

const SimpleForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // **IMPORTANT:** In a real-world app, you would send this data to a backend server (e.g., using Axios/Fetch) or a form service like Formspree.
    // For now, we will just log it and alert the user.
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you soon. (Data logged to console)');
    setFormData({ name: '', email: '', message: '' }); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit} className="simple-contact-form">
      <h2>Send Us a Message</h2>

      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message/Prayer Request:</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
      </div>

      <button type="submit" className="submit-button">Send Message</button>
    </form>
  );
};

export default SimpleForm;