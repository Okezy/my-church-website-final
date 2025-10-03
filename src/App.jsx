// src/App.jsx (FINAL CORRECTED CODE - Adding Redirect Fix)
// Fix 1: Removed redundant 'import React from 'react';'
// CHANGE: Import Navigate for the redirect fix
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; 

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
    <HashRouter>
      <Header />
      
      <FloatingActions /> 
      
      <main>
        <Routes>
          {/* FIX 1: Set the Home route to be a proper index route */}
          <Route index element={<Home />} /> 
          
          {/* FIX 2: Add a redirect for the bare root path to ensure it lands on the hash path */}
          {/* If the URL is just the base URL, navigate to the Home route. */}
          <Route path="/" element={<Navigate replace to="/" />} />
          
          {/* Other routes follow */}
          <Route path="/about" element={<About />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* This path is redundant with index, but kept for clarity */}
          {/* <Route path="/" element={<Home />} /> */} 
        </Routes>
      </main>
      
      <Footer />
    </HashRouter>
  );
}

export default App;