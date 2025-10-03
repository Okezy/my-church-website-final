// src/components/HomilyCard.jsx

import './HomilyCard.css';

const HomilyCard = ({ homily }) => {
  const { title, speaker, date, series, videoUrl, notesUrl } = homily;

  // Format date for display
  const displayDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="homily-card">
      <div className="homily-info">
        <h3>{title}</h3>
        <p className="speaker"><strong>Celebrant:</strong> {speaker}</p>
        <p className="date"><strong>Date:</strong> {displayDate}</p>
        <p className="series"><strong>Series:</strong> {series}</p>
        <div className="homily-actions">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="action-link video">
            Watch Video
          </a>
          {notesUrl && (
            <a href={notesUrl} target="_blank" rel="noopener noreferrer" className="action-link notes">
              Download Notes
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomilyCard;