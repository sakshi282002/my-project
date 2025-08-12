import React from "react";
import '../pages/skill.css';
import html from '../assets/html.webp';
import cs from '../assets/cs.png';
import javascript from '../assets/javascript.png';
import react1 from '../assets/react1.png';
import canva from '../assets/canva.png';
import node from '../assets/node.png';
import express from '../assets/express.png';


export default function Skills() {
  const skills = [
    { name: "HTML 5", icon: html, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
    { name: "CSS 3", icon: cs, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
    { name: "JavaScript", icon: javascript, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
    { name: "react1", icon: react1, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
    { name: "canva", icon: canva, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
    { name: "node", icon: node, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
        { name: "express", icon: express, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." },
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
