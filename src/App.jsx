// src/App.jsx (FINAL CORRECTED FOR GITHUB PAGES DEPLOYMENT)

// STEP 1: HASHROUTER is Correct for GH Pages
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
    <Router> 
      <Header /> 
      
      <FloatingActions /> 
      
      <main>
        <Routes>
          
          {/* 1. HOME ROUTE: Added 'index' to mark it as the default route. */}
          <Route index path="/" element={<Home />} /> 
          
          {/* Other routes follow */}
          <Route path="/about" element={<About />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

          {/* 2. REDIRECT ROUTE: Moved to the very bottom to serve as the final catch-all.
              It catches the initial bare URL load (e.g., /my-church-website/) 
              and redirects to the home route.
           */}
          <Route path="*" element={<Navigate to="/" replace />} /> 

        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;