import React from "react";
import "../Assets/Style/Project.css";

const projects = [
  {
    id: 1,
    title: " Indian Terrain E-Commerce Website",
    image:
      "https://www.indianterrain.com/cdn/shop/files/summer-sale-july-desk.jpg_04072026.jpg?v=1783170269&width=2048",
    description:
      "A responsive React e-commerce website with product listing, product details, cart, Redux, and JSON Server.",
    tech: "React • Redux • Bootstrap • JSON Server",
    github: "",
    demo: "https://your-demo-link.com",
  },

  {
    id: 2,
    title: "Meesho E-Commerce Website",
    image: "https://images.meesho.com/images/marketing/1767796583251.webp",
    description:
      "A responsive Meesho e-commerce website clone built with HTML, CSS, Bootstrap, and JavaScript.",
    tech: "JavaScript • CSS • Bootstrap",
    github: "https://gleeful-puffpuff-d64f61.netlify.app/",
    demo: "https://gleeful-puffpuff-d64f61.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzAxdbmb2Uyh4TTez-RdCHLDCu287RgWmq7Uj34O76X0qmZvO4siIasAw&s=10",
    description:
      "A modern and responsive personal portfolio website built with React. It showcases my skills, projects and a fully responsive design.",
    tech: "React • CSS • JavaScript • React Router",
    github: "",
    demo: "https://your-demo-link.com",
  },
];
export default function Project() {
  return (
    <section className="projects">
      <div className="container">
        <div className="project-heading text-center">
          <h5>My Work</h5>
          <h2>Featured Projects</h2>
          <p>
            Here are some of the projects I have built using React, JavaScript,
            Bootstrap, and modern web technologies.
          </p>
        </div>

        <div className="row mt-5">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
              <div className="project-card">
                <img src={project.image} alt={project.title} />

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                  <p>{project.demo}</p>
                  <span>{project.tech}</span>

                  <div className="project-btns">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
