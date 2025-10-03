// src/pages/Home.jsx (COMPLETE CODE)

import Hero from '../components/Hero';
import ServiceInfo from '../components/ServiceInfo';
import PrayerRotator from '../components/PrayerRotator'; // NEW IMPORT
import AnnouncementSlider from '../components/AnnouncementSlider'; 
import HomeFeatures from '../components/HomeFeatures'; 

const Home = () => {
  // Style block to ensure content inside stays centered and has horizontal padding
  const contentStyle = {
    maxWidth: '1200px', 
    margin: '0 auto',  
    padding: '0 15px', 
  };

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Hero />
      <div style={contentStyle}> 
        <ServiceInfo />
      </div>
      
      {/* --- NEW PRAYER ROTATOR SECTION --- */}
      <PrayerRotator /> 
      
      <AnnouncementSlider />
      
      <HomeFeatures /> 
      
    </div>
  );
};

export default Home;