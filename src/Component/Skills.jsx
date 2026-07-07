import React from "react";
import "../Assets/Style/Skill.css";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">

        <div className="section-title text-center">
          <h5>My Skills</h5>
          <h2>Technologies I Work With</h2>
          <p>
            These are the technologies I use to create responsive and modern web applications.
          </p>
        </div>

        <div className="row g-4 mt-4">

          {skills.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="skill-card">
                <img src={skill.icon} alt={skill.name} />
                <h4>{skill.name}</h4>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}