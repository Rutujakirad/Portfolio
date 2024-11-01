// Home.js
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-section">
      {/* Fixed background stars */}
      <div className="star-background">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
      </div>
      
      <div className="content">
        <h2 className="fade-in">Hello, I'm Rutuja Kirad</h2>
        <p className="fade-in">A passionate designer and developer eager to create impactful experiences.</p>
      </div>
    </div>
  );
}

export default Home;
