// components/Experience.js
import React from 'react';
import { FaCode, FaProjectDiagram, FaRocket } from 'react-icons/fa';
import '../styles/Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      
      <div className="experience-cards">
        {/* Experience Card 1 */}
        <div className="experience-card">
          <div className="experience-icon">
            <FaCode />
          </div>
          <h3>Developer Intern - ZasmLabs Pvt Ltd</h3>
          <p className="experience-duration">November 2022 - August 2023</p>
          <ul>
            <li>Worked on DRDO Integrated Avalanche Weather and Navigation System (IAWNS).</li>
            <li>Developed frontend features using React.js and managed the database.</li>
            <li>Authored project documentation (SRS, SDD, STP).</li>
            <li>Collaborated with cross-functional teams to align project goals.</li>
            <li>Conducted code reviews for performance and maintainability.</li>
          </ul>
        </div>

        {/* Experience Card 2 */}
        <div className="experience-card">
          <div className="experience-icon">
            <FaRocket />
          </div>
          <h3>Web Development Intern - INTERNPE</h3>
          <p className="experience-duration">May 2024 - June 2024</p>
          <ul>
            <li>Completed weekly web tasks and mini-projects using HTML, CSS, and JavaScript.</li>
            <li>Created responsive pages and implemented interactive features.</li>
            <li>Ensured cross-browser compatibility and met deadlines efficiently.</li>
            <li>Learned and applied new technologies quickly.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
