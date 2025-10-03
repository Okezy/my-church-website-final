// src/App.jsx (Ensure you have this import)
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; //
// ... other imports ...

function App() {
  return (
    <HashRouter>
      {/* ... Header, Footer, etc. are correct outside the Routes block ... */}
      <main>
        <Routes>
          {/* 1. Define the Home route as the primary match */}
          <Route path="/" element={<Home />} />
          
          {/* 2. *** THE CRITICAL REDIRECT FIX *** */}
          {/* If a route fails to match (which often happens on the bare base URL), 
                redirect to the primary Home route with the hash.
           */}
          <Route path="*" element={<Navigate to="/" replace />} /> 

          {/* Other routes follow */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/homilies" element={<Homilies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* ... Footer ... */}
    </HashRouter>
  );
}

export default App;