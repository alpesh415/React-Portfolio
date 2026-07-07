import React from "react";
import "../Assets/Style/Home.css";
import profile from "../Assets/image1.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 col-md-6">
            <h5>Hello, I'm</h5>

            <h1>
              Harshit <span>Rathod</span>
            </h1>

            <h3>Frontend React Developer</h3>

            <p>
              Passionate React developer creating responsive and modern web
              applications with React.js, Bootstrap, and JavaScript.
            </p>

            <div className="home-btns">
              <button className="btn1">Download CV</button>
              <button className="btn2" ><Link to="/contact" style={{textDecoration:"none"}}>Contact Me</Link></button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-6 text-center">
            <img src={profile} alt="Profile" className="profile-img" />
          </div>

        </div>
      </div>
    </section>
  );
}