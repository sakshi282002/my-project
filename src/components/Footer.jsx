import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#projects">Projects</a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
