// src/App.jsx (COMPLETE CODE - Confirmed and Corrected)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Global Components ---
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions'; 

// --- Page Components ---
import Home from './pages/Home';
import About from './pages/About'; 
import Homilies from './pages/Homilies';
import Events from './pages/Events'; // Import must exist in src/pages/Events.jsx
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      
      {/* THIS IS THE CRITICAL LINE */}
      <FloatingActions /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/events" element={<Events />} /> {/* CORRECTED: Path is now lowercase */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;