import React from 'react';
import sakshiimg from '../assets/sakshiimg.jpg';
import '../pages/about.css';

const About = () => {
  return (
    <section className='about-section'>
      <div className="about-container">
        <img src={sakshiimg} alt="Sakshi Sharma" className="profile-img" />

        <h2>Sakshi Sharma</h2>
        <p>
          I am a web developer passionate about creating clean, user-friendly, and responsive websites. 
          With expertise in modern web technologies, I build fast and scalable solutions that blend design 
          with functionality. Whether it's a simple website or a complex web app, I focus on performance, 
          accessibility, and a great user experience. Let’s work together to bring your ideas to life!
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/your-github-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a
            href="https://your-portfolio-url.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-earth-americas"></i> Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
