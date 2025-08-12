import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../pages/contact.css';

const Contact = () => {
  const form = useRef();
  const [darkMode, setDarkMode] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2i1cci1',
      'template_t9py4ih',
      form.current,
      '1EGtIDrcjDNy7-L7K'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Something went wrong. Try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <section className={`contact-section ${darkMode ? 'dark' : ''}`}>
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>If you have a project in mind or just want to say hello, feel free to reach out!</p>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: <a href="sakshisharma57268@gmail.com">sakshisharma57268@gmail.com</a></p>
        <p>Website: <a href="https://yourwebsite.com">portfolio.com</a></p>
        <p>Location: Dharamshala, Himachal Pradesh</p>
      </div>
    </section>
  );
};

export default Contact;
