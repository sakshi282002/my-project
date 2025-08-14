import React from 'react';
import '../pages/home.css';
import html from '../assets/html.webp';
import cs from '../assets/cs.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import canva from '../assets/canva.png';




const Home = () => {
  return (
    <section className='container'>
      
      {/* Bubble images */}
      <div className='bubbles'>
        <img src={html} alt="bubble" />
        <img src={cs} alt="bubble" />
        <img src={javascript} alt="bubble" />
        <img src={node} alt="bubble" />
        <img src={express} alt="bubble" />
        <img src={canva} alt="bubble" />
        
      </div>

      {/* Main content */}
      <div className='home-content'>
        <h1>I'm <span>Sakshi Sharma</span></h1>
        <p>A passionate web developer creating amazing digital experiences.</p>

        <div className='buttons'>
          <a href='https://www.canva.com/design/DAGvwxWUCO0/c_52YD0ZYgj5CHuyYdNPBw/view' download className='btn'>Download Resume</a>
          <a href='/contact' className='btn'>Contact me</a>   
        </div>

        <div className='icons'>
          <a href='https://github.com/sakshi282002'><i className="fa-brands fa-github"></i></a>
          <a href='https://www.linkedin.com/feed/'><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://www.linkedin.com/feed/'><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>

    </section>
  )
}

export default Home;
