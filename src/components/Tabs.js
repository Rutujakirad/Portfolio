// Tabs.js
import React, { useState } from 'react';
import '../styles/Tabs.css';

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case "about":
      return (
        <div>
          <h2>About Me</h2>
          <p>Details about you...</p>
        </div>
      );
    case "projects":
      return (
        <div>
          <h2>My Projects</h2>
          <p>Details about your projects...</p>
        </div>
      );
    case "experience":
      return (
        <div>
          <h2>Experience</h2>
          <p>Details about your experience...</p>
        </div>
      );
    case "skills":
      return (
        <div>
          <h2>Skills</h2>
          <p>Details about your skills...</p>
        </div>
      );
    case "contact":
      return (
        <div>
          <h2>Contact</h2>
          <p>Details on how to contact you...</p>
        </div>
      );
    default:
      return <div><h2>Welcome</h2><p>Intro text here...</p></div>;
  }
};

function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tabs-container glass-effect">
      <nav className="tabs">
        <button className={activeTab === "home" ? 'active' : ''} onClick={() => setActiveTab("home")}>Home</button>
        <button className={activeTab === "about" ? 'active' : ''} onClick={() => setActiveTab("about")}>About</button>
        <button className={activeTab === "projects" ? 'active' : ''} onClick={() => setActiveTab("projects")}>Projects</button>
        <button className={activeTab === "experience" ? 'active' : ''} onClick={() => setActiveTab("experience")}>Experience</button>
        <button className={activeTab === "skills" ? 'active' : ''} onClick={() => setActiveTab("skills")}>Skills</button>
        <button className={activeTab === "contact" ? 'active' : ''} onClick={() => setActiveTab("contact")}>Contact</button>
      </nav>
      <div className="tab-content">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Tabs;
