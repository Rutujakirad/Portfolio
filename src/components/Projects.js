// components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

// Define a mapping for technology to their respective icons or styles
const techIcons = {
  Java: '🟡',      // Yellow circle for Java
  SQL: '🔵',       // Blue circle for SQL
  'Apache NetBeans': '⚙️', // Gear icon for IDE
  'MERN Stack': '🟢', // Green circle for MERN
  'Next.js': '🌐', // Globe for Next.js
};

const projects = [
  {
    title: 'University Management System',
    description: 'A system for managing university operations including student enrollment and course management.',
    technologies: ['Java', 'SQL', 'Apache NetBeans'],
  },
  {
    title: 'Attendance Monitoring System',
    description: 'An app for managing student attendance with real-time tracking and secure authentication.',
    technologies: ['MERN Stack', 'Next.js'],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>
              Technologies: {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge" title={tech}>
                  {techIcons[tech]} {tech}
                </span>
              ))}
            </small>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
  