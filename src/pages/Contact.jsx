// src/pages/Contact.jsx (Updated)

import ContactInfo from '../components/ContactInfo';
import SimpleForm from '../components/SimpleForm'; // We'll create this next

const Contact = () => {
  return (
    <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50', margin: '1.5rem', textAlign:'center' }}>Get in Touch with the Parish</h1>
      <p style={{ margin: '1.5rem', fontSize: '1.1rem', textAlign:'center' }}>
        We would love to hear from you. Use the details below for service times and location, or send us a message directly.
      </p>

      <ContactInfo />
      <SimpleForm />
    </div>
  );
};

export default Contact;