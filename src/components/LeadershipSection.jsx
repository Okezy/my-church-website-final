// src/components/LeadershipSection.jsx
import './LeadershipSection.css';

const staff = [
  { id: 1, name: 'Fr. Michael O’Connell', title: 'Pastor', bio: 'Pastor Michael has led our parish since 2018. He focuses on community outreach and spiritual formation.' },
  { id: 2, name: 'Fr. David Agbaje', title: 'Associate Pastor', bio: 'Fr. David oversees the youth ministry and weekly Bible studies.' },
  { id: 3, name: 'Mrs. Helen Chukwu', title: 'Parish Secretary', bio: 'Helen manages the daily operations of the parish office.' },
];

const LeadershipSection = () => {
  return (
    <section className="leadership-section">
      <h2>Our Parish Leadership</h2>
      <div className="leadership-grid">
        {staff.map(member => (
          <div key={member.id} className="staff-card">
            <div className="staff-img-placeholder">👤</div>
            <h3>{member.name}</h3>
            <p className="staff-title">{member.title}</p>
            <p className="staff-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;