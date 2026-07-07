import React from "react";
import "../Assets/Style/Project.css";


const projects = [
  {
    id: 1,
    title: "boAt E-Commerce Website",
    image: "https://i.ytimg.com/vi/Hjmv981Batg/maxresdefault.jpg",
    description:
      "A responsive React e-commerce website with product listing, product details, cart, Redux, and JSON Server.",
    tech: "React • Redux • Bootstrap • JSON Server",
    github: "https://github.com/yourusername/boat-project",
    demo: "https://your-demo-link.com",
  },
  {
    id: 2,
    title: "U.s.Polo E-Commerce website",
    image: "https://tse3.mm.bing.net/th/id/OIP.92rgqG4XaYWTT-9zaoUFfwHaEC?pid=Api&P=0&h=180",
    description:
      "A responsive US Polo e-commerce website clone built with HTML, CSS, Bootstrap, and JavaScript.",
    tech: "JavaScript • CSS • Bootstrap",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-demo-link.com",
  },
  {
    id: 3,
    title: "Weather App",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600",
    description:
      "A weather application that fetches live weather data using an API and displays current conditions.",
    tech: "React • API • JavaScript",
    github: "https://github.com/yourusername/weather-app",
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
            Here are some of the projects I have built using React,
            JavaScript, Bootstrap, and modern web technologies.
          </p>
        </div>

        <div className="row mt-5">

          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 mb-4" key={project.id}>

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <span>{project.tech}</span>

                  <div className="project-btns">

                    <a
                      href={project.github}
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