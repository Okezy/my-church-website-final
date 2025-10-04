// src/App.jsx (CORRECTED FOR GITHUB PAGES DEPLOYMENT)

// STEP 1: CHANGE BROWSERROUTER BACK TO HASHROUTER
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; 

// --- Global Components (You must have these imported) ---
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import FloatingActions from './components/FloatingActions'; 
// --- Page Components (You must have these imported) ---
import Home from './pages/Home'; 
import About from './pages/About'; 
import Homilies from './pages/Homilies';
import Events from './pages/Events'; 
import Contact from './pages/Contact';

function App() {
  return (
    // STEP 2: USE HASHROUTER
    <HashRouter> 
      <Header /> 
      
      <FloatingActions /> 
      
      <main>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

          {/* This route is CRITICAL for GitHub Pages, as it forces the initial load 
              on the bare URL (e.g., /my-church-website/) to resolve to the Home page (#/)
           */}
          <Route path="*" element={<Navigate to="/" replace />} /> 

        </Routes>
      </main>
      
      <Footer />
    </HashRouter>
  );
}

export default App;