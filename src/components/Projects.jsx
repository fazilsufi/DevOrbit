import { Link } from "react-router-dom";
import "./Projects.css";
const projects = [
  {
    number: "01",
    category: "BUSINESS WEBSITE",
    title: "Kashmir Craft",
    description:
      "A premium digital storefront concept for showcasing authentic Kashmiri handicrafts and connecting traditional craftsmanship with modern customers.",
    tags: ["React", "Responsive", "UI/UX"],
    type: "featured",
    link: "/projects/kashmircraft",
  },
  {
    number: "02",
    category: "WEB APPLICATION",
    title: "MyCart",
    description:
      "A clean e-commerce interface focused on product discovery, responsive layouts and a smooth shopping experience.",
    tags: ["React", "JavaScript", "Bootstrap"],
    type: "standard",
    link: "mycart.jsx",
  },
  {
    number: "03",
    category: "INTERACTIVE WEB",
    title: "GameLab",
    description:
      "A collection of lightweight browser games built with JavaScript and designed around simple, responsive interactions.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "standard",
    link: "gamelab.jsx",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-glow"></div>
      <div className="projects-grid"></div>

      <div className="container projects-container">
        {/* HEADER */}
        <div className="projects-header">
          <div className="projects-eyebrow">
            <span className="projects-line"></span>
            SELECTED WORK
          </div>

          <div className="projects-heading-row">
            <h2 className="projects-title">
              Work that turns
              <br />
              <span>ideas into reality.</span>
            </h2>

            <p className="projects-intro">
              A selection of projects built with a focus on clean interfaces,
              responsive experiences and real-world usability.
            </p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project-card ${project.type}`}
              key={project.number}
            >
              {/* PROJECT VISUAL */}
              <div className="project-preview">
                <div className="preview-browser">
                  <div className="preview-top">
                    <div className="preview-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="preview-url">
                      {project.title.toLowerCase().replaceAll(" ", "")}
                      .dev
                    </div>
                  </div>

                  <div className="preview-content">
                    <div className="preview-nav">
                      <strong>{project.title}</strong>

                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>

                    <div className="preview-main">
                      <small>{project.category}</small>

                      <h3>
                        {project.title}
                        <span>.</span>
                      </h3>

                      <div className="preview-line"></div>

                      <div className="preview-button">
                        <Link to={project.link}>EXPLORE →</Link>
                      </div>
                    </div>

                    <div className="preview-shape preview-shape-one"></div>
                    <div className="preview-shape preview-shape-two"></div>
                  </div>
                </div>

                {/* floating number */}
                <div className="preview-number">{project.number}</div>
              </div>

              {/* PROJECT INFO */}
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-bottom">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="project-link"
                    aria-label={`View ${project.title}`}
                  >
                    <span>VIEW PROJECT</span>
                    <strong>↗</strong>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <div>
            <span className="cta-label">HAVE A PROJECT?</span>

            <h3>
              Your idea could be
              <span> next.</span>
            </h3>
          </div>

          <a href="#contact" className="projects-cta-button">
            Start a Project
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
