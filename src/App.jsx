// src/App.jsx (FINAL CORRECTED CODE)
// Fix 1: Removed redundant 'import React from 'react';'
import { HashRouter, Routes, Route } from 'react-router-dom'; // Fix 2: Changed BrowserRouter to HashRouter

// --- Global Components ---
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions'; 

// --- Page Components ---
import Home from './pages/Home';
import About from './pages/About'; 
import Homilies from './pages/Homilies';
import Events from './pages/Events'; 
import Contact from './pages/Contact';

function App() {
  return (
    // Fix 2: Use HashRouter for reliable GitHub Pages deployment
    <HashRouter>
      <Header />
      
      <FloatingActions /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </HashRouter>
  );
}

export default App;