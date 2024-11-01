// components/Skills.js
import { SiJava } from 'react-icons/si';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaGithub, FaPaintBrush, FaProjectDiagram, FaJava, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiBootstrap } from 'react-icons/si';
import '../styles/Skills.css';

const skillCategories = [
  { title: 'Frontend Technologies', skills: ['HTML', 'CSS', 'React.js', 'Bootstrap'], icons: [<FaHtml5 />, <FaCss3Alt />, <FaReact />, <SiBootstrap />] },
  { title: 'Backend Technologies', skills: ['Node.js', 'Java'], icons: [<FaNodeJs />, <FaJava />] },
  { title: 'Database', skills: ['PostgreSQL', 'MongoDB'], icons: [<SiPostgresql />, <SiMongodb />] },
  { title: 'Cloud Computing', skills: ['AWS', 'Azure'], icons: [<FaAws />, <FaCloud />] }, // Use FaCloud instead of SiAzure
  { title: 'Version Control', skills: ['Git / GitHub'], icons: [<FaGithub />] },
  { title: 'Operating Systems', skills: ['Linux'], icons: [<FaProjectDiagram />] },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        Technical Skills
      </motion.h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            className="skills-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{category.title}</h3>
            <div className="icons-row">
              {category.icons.map((icon, idx) => (
                <div className="icon" key={idx}>
                  {icon}
                </div>
              ))}
            </div>
            <p>{category.skills.join(', ')}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 1 }} 
      >
        Soft Skills
      </motion.h2>
      <motion.ul 
        className="soft-skills"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <li>Good Communication Skills</li>
        <li>Team Collaboration</li>
        <li>Adaptability</li>
        <li>Problem-solving</li>
        <li>Time Management</li>
      </motion.ul>

      <motion.div
        className="design-passion-section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <h3>Passionate about Designing & Project Management</h3>
        <div className="icons-row">
          <FaPaintBrush title="Designing" className="passion-icon" />
          <FaProjectDiagram title="Project Management" className="passion-icon" />
        </div>
        <p>I enjoy bringing creative designs to life and organizing projects with precision and purpose.</p>
      </motion.div>
    </section>
  );
}

export default Skills;
