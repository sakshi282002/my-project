import React from "react";
import '../pages/project.css';
import cafe from '../assets/cafe.png';
import food from '../assets/food.png';
import cal from '../assets/cal.png';

const projectsData = [
  {
    title: "Simple Cafe Project",
    description: " Created a warm and inviting landing page for a cafe using HTML & CSS, featuring a coffee-themed hero image with a centered welcome message.",
    image : cafe,
    link: "https://cafeproject2.netlify.app/"
  },
  {
    title: "Food Landing Page",
    description: " Built an attractive landing section using HTML, CSS, and JavaScript, featuring a vibrant background, highlighted keywords, and a call-to-action button for better user engagement.",
    image: food,
    link: "https://foodproject3.netlify.app/"
  },
  {
    title: "Calculator App",
    description: "A clean and simple calculator app for all your basic math needs Quick, accurate, and easy to use for everyday calculations.",
    image: cal,
    link: "https://calculater3.netlify.app/"
  },
  {
    title: "",
    description: "Frontend design for an e-commerce store built with HTML, CSS, and React.",
    image: "",
    link: ""
  },
  {
    title: "",
    description: "Frontend design for an e-commerce store built with HTML, CSS, and React.",
    image: "",
    link: "#"
  },
  {
    title: "",
    description: "Frontend design for an e-commerce store built with HTML, CSS, and React.",
    image: "",
    link: "#"
  },

 
];

export default function project() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title || "Project"} className="project-image" />
            <h3 className="project-title">{project.title || "Untitled Project"}</h3>
            <p className="project-desc">{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
