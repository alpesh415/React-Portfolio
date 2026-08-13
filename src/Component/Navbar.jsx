import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Style/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand logo" to="/">
          A L P E S H
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/skill">
                Skills
              </Link>
            </li>

             <li className="nav-item">
              <Link className="nav-link" to="/project">
                Project
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
    <a
  href="/ALPESH-RESUME.pdf"
  download
  className="btn resume-btn"
>
  Resume
</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}