// src/components/AnnouncementSlider.jsx (CLEANED)
// Removed 'useRef' import
import { useState, useEffect } from 'react'; 
import './AnnouncementSlider.css'; 

const announcements = [
  { id: 1, title: "Archdiocese News: Annual Pilgrimage", text: "Details about the upcoming diocesan pilgrimage and registration.", link: "#" },
  { id: 2, title: "How to Pray the Rosary", text: "A step-by-step guide and spiritual reflection on the mysteries.", link: "#" },
  { id: 3, title: "Parish Notice: Office Closed Friday", text: "The parish office will be closed this Friday for a staff retreat.", link: "#" },
  { id: 4, title: "Feast of Our Lady: Special Mass Time", text: "Join us for a special 7:00 PM Mass on the Feast Day.", link: "#" },
];

const SLIDE_INTERVAL_MS = 6000;
const TRANSITION_DURATION_MS = 800;

const AnnouncementSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next'); 
  // Removed: const timeoutRef = useRef(null);

  // Hook for Automatic Slide Advancement
  useEffect(() => {
    let intervalId;

    const startInterval = () => {
      intervalId = setInterval(() => {
        // Step 1: Start the fade-out/transition
        setSlideDirection('next');
        setIsTransitioning(true);

        // Step 2: Wait for the transition duration, then change content
        setTimeout(() => {
          // Use the functional update to safely access previous state
          setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % announcements.length);
          setIsTransitioning(false);
        }, TRANSITION_DURATION_MS);

      }, SLIDE_INTERVAL_MS);
    };

    startInterval();

    // Cleanup: Clear interval on unmount
    return () => clearInterval(intervalId);
  }, []); 

  // Function to manually go to a specific slide index (used by the dots)
  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlideIndex) return;
    
    // Manual transition logic
    setSlideDirection(index > currentSlideIndex ? 'next' : 'prev');
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSlideIndex(index);
      setIsTransitioning(false);
    }, TRANSITION_DURATION_MS);
  };
  
  const currentSlide = announcements[currentSlideIndex];

  return (
    <section className="announcement-slider-section">
      <div className={`slider-content-wrapper ${isTransitioning ? 'transitioning' : ''} ${slideDirection}`}>
        <img src="/church-logo.png" alt="Announcement Image" className="slider-image-placeholder" />
        
        <div className="slider-text">
          <span className="slider-badge">Featured Announcement</span>
          <h3>{currentSlide.title}</h3>
          <p>{currentSlide.text}</p>
          <a href={currentSlide.link} className="slider-link">Read More →</a>
        </div>
      </div>
      
      <div className="slider-controls">
         {announcements.map((_, index) => (
            <span 
                key={index} 
                className={`slider-dot ${index === currentSlideIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)} 
            ></span>
         ))}
      </div>
    </section>
  );
};

export default AnnouncementSlider;