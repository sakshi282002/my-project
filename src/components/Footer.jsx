import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()}Sakshi. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="http://localhost:3000/project">Projects</a>
        <a href="https://github.com/sakshi282002" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
