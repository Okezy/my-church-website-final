// src/App.jsx 

// STEP 1: Ensure you import Navigate
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; 

// ... other imports ...

function App() {
  return (
    <HashRouter>
      <Header /> 
      
      {/* ... FloatingActions ... */}
      
      <main>
        <Routes>
          {/* 1. Define the Home route as the primary match */}
          <Route path="/" element={<Home />} />
          
          {/* 2. *** THE CRITICAL REDIRECT FIX *** */}
          {/* This route catches any path that doesn't match a defined route, 
             which includes the initial bare URL load, and forces a redirect 
             to the Home route ("/") which is read by HashRouter as "#/". 
           */}
          <Route path="*" element={<Navigate to="/" replace />} /> 

          {/* Other routes follow */}
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