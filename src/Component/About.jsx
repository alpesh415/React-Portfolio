import React from "react";
import "../Assets/Style/About.css";
import profile from "../Assets/image1.jpeg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-5 text-center">
            <img src={profile} alt="Profile" className="about-img" />
          </div>

          {/* Right Content */}
          <div className="col-lg-7">

            <h5>About Me</h5>

            <h2>
              Passionate <span>React Developer</span>
            </h2>

            <p>
              Hello! I'm <strong>Harshit Rathod</strong>, a Frontend React
              Developer who enjoys creating clean, responsive, and
              user-friendly websites. I focus on building modern interfaces
              using React.js, JavaScript, Bootstrap, HTML, and CSS.
            </p>

            <p>
              I enjoy learning new technologies, solving real-world problems,
              and creating projects that provide a great user experience. My
              goal is to become a skilled Full Stack Developer and contribute
              to meaningful products.
            </p>

            <div className="about-info">

              <div>
                <h6>Name</h6>
                <span>Harshit Rathod</span>
              </div>

              <div>
                <h6>Email</h6>
                <span>harshitrathod09r@gmail.com</span>
              </div>

              <div>
                <h6>Location</h6>
                <span>Ahmedabad, Gujarat</span>
              </div>

              <div>
                <h6>Experience</h6>
                <span>React Projects</span>
              </div>

            </div>

         
          </div>

        </div>
      </div>
    </section>
  );
}