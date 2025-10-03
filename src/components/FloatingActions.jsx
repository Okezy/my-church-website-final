// src/components/FloatingActions.jsx (COMPLETE CODE - Using Simple Icons)
import React, { useState, useEffect } from 'react';
import './FloatingActions.css';

// *** INTEGRATION PLACEHOLDER FUNCTION ***
const openChat = () => {
  // Check for external chat widget integration
  if (window.CatholicAISupport && typeof window.CatholicAISupport.open === 'function') {
    window.CatholicAISupport.open();
    console.log("Attempting to open external AI Chat Widget...");
  } else {
    // Fallback alert for the user/developer
    alert(
      "AI Chat Widget Placeholder:\n\n" +
      "To make this button functional, please integrate your chat service script into public/index.html."
    );
  }
};

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Logic to show/hide the "Back to Top" button
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll the window smoothly back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="floating-actions-container">
      
      {/* 1. Live Chat / AI Support Button */}
      <button 
        className="floating-btn chat-btn" 
        onClick={openChat}
        aria-label="Open AI Chat Support"
        title="AI Catholic Chat"
      >
        {/* Changed from Unicode to a simple Emoji/Text character */}
        <span role="img" aria-label="Chat Bubble">🗨️</span> 
      </button>

      {/* 2. Back to Top Button (Conditionally Visible) */}
      {isVisible && (
        <button 
          className="floating-btn scroll-top-btn" 
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          title="Back to Top"
        >
          {/* Changed from Unicode to a simple Arrow character */}
          <span role="img" aria-label="Up Arrow">↑</span>
        </button>
      )}
      
    </div>
  );
};

export default FloatingActions;