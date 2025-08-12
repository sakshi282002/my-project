import React from 'react';
import sakshiimg from '../assets/sakshiimg.jpg';
import '../pages/about.css';

const About = () => {
  return (
  
       <section className='about-section'>
        <div className="about-container">
            <img src={sakshiimg}alt="Your Profile Picture" class="profile-img"/>
            <h2>Sakshi Sharma</h2>
            <p>"I am a web developer passionate about creating clean, user-friendly, and responsive websites. With expertise in modern web technologies, I build fast and scalable solutions that blend design with functionality. Whether it's a simple website or a complex web app, I focus on performance, accessibility, and a great user experience. Let’s work together to bring your ideas to life!"</p>
            <div class="social-links">
                <a href="#"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                <a href="#"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="#"><i class="fa-solid fa-earth-americas"></i> Portfolio</a>
            </div>
        </div>
    </section>
   
    
  )
}

export default About
