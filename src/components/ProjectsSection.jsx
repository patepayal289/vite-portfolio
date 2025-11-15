import React from "react";

const projectData = [
  {
    title: "☁️ Weather Vibes",
    desc: "A React weather app using the OpenWeather API with a clean and modern UI.",
    demo: "https://patepayal289.github.io/weather-app",
    github: "https://github.com/patepayal289/weather-app",
  },
  {
    title: "📚 Mini Course Platform",
    desc: "An interactive platform for mini-courses built using React and backend APIs.",
    demo: "https://patepayal289.github.io/mini-course-platform",
    github: "https://github.com/patepayal289/mini-course-platform",
  },
  {
    title: "📝 Notes App",
    desc: "A simple notes application using React, Firebase auth, and local storage.",
    demo: "https://patepayal289.github.io/notesapp",
    github: "https://github.com/patepayal289/notesapp",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white py-5"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5">🚀 Projects</h2>

        <div className="row justify-content-center g-4">
          {projectData.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card bg-dark text-light h-100 shadow border-light project-card"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>

                  <div className="mt-3">
                    <a
                      href={project.demo}
                      className="btn btn-primary btn-sm me-2 fw-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="btn btn-outline-light btn-sm fw-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* Extra Styles */}
      <style>
        {`
          .project-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.6);
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
