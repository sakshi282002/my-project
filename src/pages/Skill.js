import React from "react";
import '../pages/skill.css';
import html from '../assets/html.webp';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react1 from '../assets/react1.png';
import canva from '../assets/canva.webp';
import node from '../assets/node.png';
import express from '../assets/express.png';
import figma from '../assets/figma.webp';

export default function Skills() {
  const skills = [
    { name: "HTML 5", icon: html, desc: "Proficient in building well-organized web layouts with modern HTML standards Focused on writing accessible and maintainable HTML code"}, 
    { name: "CSS 3", icon: css, desc: "Skilled in designing visually appealing and responsive layouts using CSS Experienced in using Flexbox, Grid, and animations to enhance user experience." },
    { name: "JavaScript", icon: javascript, desc: "Skilled in making websites interactive and user-friendly with JavaScriptAble to implement features like forms, animations, and dynamic content." },
    { name: "React", icon: react1, desc: "Skilled in developing interactive web apps using React Able to build reusable components and manage app state effectively." },
    { name: "Canva", icon: canva, desc: "Skilled at designing eye-catching visuals using Canva Able to create banners, posters, and social media content efficiently." },
    { name: "Node.js", icon: node, desc: "Skilled in using Node.js and Express.js to build backend applicationsAble to create APIs and manage server-side data easily." },
    { name: "Express.js", icon: express, desc: "I use Express.js to create simple and fast servers." },
    { name: "Figma", icon: figma, desc: "Experienced in designing user-friendly interfaces and prototypes with Figma." },
  ];


  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="underline"></div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
