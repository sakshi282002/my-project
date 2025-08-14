import React from 'react';
import '../pages/home.css';

const Home = () => {
  return (
<section className='container'>
<div className='home-content'>
  <h1>I'm <span>Sakshi Sharma</span></h1>
  
   <p>A passionate web developer creating amazing digital experiences.</p>

 
  <div className='buttons'>
 
    <a href='https://www.canva.com/design/DAGvwxWUCO0/c_52YD0ZYgj5CHuyYdNPBw/view?utm_content=DAGvwxWUCO0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9bed404f79' download className='btn'>Download Resume</a>
    <a href='http://localhost:3000/contact' className='btn'>Contact me</a>   
    </div>

    <div className='icons'>
      <a href='https://github.com/sakshi282002'><i class="fa-brands fa-github"></i></a>
      <a href='https://www.linkedin.com/feed/'><i class="fa-brands fa-linkedin"></i></a>
      <a href='https://www.linkedin.com/feed/'><i class="fa-brands fa-facebook"></i></a>

    </div>

</div>

</section>
  )
}

export default Home;
