import { useState, useCallback } from 'react'; // Removed useEffect and added useCallback
import prayers from '../data/prayers.json';
import './PrayerRotator.css';

// Removed ROTATION_DURATION constant

const PrayerRotator = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to advance to the next prayer
    // useCallback is still useful here for performance, even without useEffect
    const nextPrayer = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % prayers.length);
    }, []);

    // Function to go back to the previous prayer
    const prevPrayer = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + prayers.length) % prayers.length);
    };

    // --- REMOVED useEffect BLOCK FOR AUTOMATIC ROTATION ---

    // Current prayer object to display
    const currentPrayer = prayers[currentIndex];

    // Helper to render the content with line breaks
    const renderContent = (contentArray) => {
        return contentArray.map((line, index) => (
            <p key={index} className="prayer-line">
                {line}
            </p>
        ));
    };

    return (
        <section className="prayer-rotator-section">
            <h2 className="prayer-section-title">Common Church Prayers</h2>
            <div className="prayer-card-container">
                
                {/* Left Navigation Arrow */}
                <button className="prayer-nav-btn left" onClick={prevPrayer} aria-label="Previous Prayer">
                    &#10094; {/* Left Angle Bracket */}
                </button>
                
                {/* Prayer Content Card */}
                <div className="prayer-card">
                    <h3 className="prayer-title">{currentPrayer.title}</h3>
                    <p className="prayer-latin-title">({currentPrayer.latin_title})</p>
                    
                    <div className="prayer-content">
                        {renderContent(currentPrayer.content)}
                    </div>
                </div>

                {/* Right Navigation Arrow */}
                <button className="prayer-nav-btn right" onClick={nextPrayer} aria-label="Next Prayer">
                    &#10095; {/* Right Angle Bracket */}
                </button>
                
            </div>
            
            {/* Dots for visual indication of current prayer */}
            <div className="prayer-dots">
                {prayers.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to prayer ${index + 1}`}
                    ></span>
                ))}
            </div>

        </section>
    );
};

export default PrayerRotator;