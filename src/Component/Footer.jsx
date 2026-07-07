import React from "react";
import "../Assets/Style/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Logo & About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h2 className="footer-logo">
              Harshit
            </h2>

            <p>
              Frontend React Developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4>Quick Links</h4>

            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skill">Skills</a></li>
              <li><a href="/project">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h4>Contact</h4>

            <p>📍 Ahmedabad, Gujarat</p>
            <p>📧 harsh@gmail.com</p>
            <p>📱 +91 9876543210</p>
<div className="social-icons">
  <a href="https://github.com/harshitrathod0910r-cmd" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>

  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>

  <a href="https://www.instagram.com/harshit_rathod_9324?igsh=OXNmdzhwODk2NGxn" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="mailto:harsh@gmail.com">
    <FaEnvelope />
  </a>
</div>
          </div>

        </div>

        <hr />

        <div className="copyright">
          © 2026 Harshit Rathod | All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}