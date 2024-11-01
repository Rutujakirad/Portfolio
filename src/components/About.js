// components/About.js
import React from 'react';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          A dedicated MSc Computer Science student with experience in frontend and backend development,
          eager to apply my skills in project management and UI/UX design.
        </p>
        <h3 className="education-title">Education</h3>
        <ul className="education-list">
          <li className="education-item">
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            MSc in Computer Science - Nowrosjee Wadia College (CGPA: 8.05)
          </li>
          <li className="education-item">
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            BSc in Computer Science - S.M. Joshi College (CGPA: 8.5)
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
