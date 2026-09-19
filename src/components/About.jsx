import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-glow"></div>
      <div className="about-grid"></div>

      <div className="container about-container">

        {/* HEADER */}
        <div className="about-header">
          <div className="about-eyebrow">
            <span className="about-line"></span>
            ABOUT DEVORBIT
          </div>

          <h2 className="about-title">
            Building digital experiences
            <br />
            <span>with purpose.</span>
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-content">

          {/* LEFT */}
          <div className="about-main">
            <p className="about-lead">
              I'm a developer focused on building modern websites and
              interactive web experiences that are clean, responsive and
              designed around real-world needs.
            </p>

            <p className="about-text">
              DevOrbit is where I turn ideas into digital products —
              combining development, design and problem-solving to create
              websites that don't just look good, but actually work.
            </p>

            <p className="about-text">
              From business websites and landing pages to React-based
              applications, every project is built with attention to
              performance, usability and detail.
            </p>

            <a href="#contact" className="about-button">
              <span>LET'S WORK TOGETHER</span>
              <strong>↗</strong>
            </a>
          </div>

          {/* RIGHT */}
          <div className="about-side">

            <div className="about-card">
              <span className="about-card-number">01</span>

              <div>
                <h3>Development</h3>
                <p>
                  Modern frontend development using React, JavaScript,
                  HTML and CSS.
                </p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card-number">02</span>

              <div>
                <h3>Design</h3>
                <p>
                  Clean interfaces with responsive layouts and thoughtful
                  user experiences.
                </p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card-number">03</span>

              <div>
                <h3>Problem Solving</h3>
                <p>
                  Turning ideas and requirements into practical digital
                  solutions.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="about-stats">

          <div className="about-stat">
            <strong>03+</strong>
            <span>PROJECTS BUILT</span>
          </div>

          <div className="about-stat">
            <strong>04</strong>
            <span>CORE SKILLS</span>
          </div>

          <div className="about-stat">
            <strong>100%</strong>
            <span>FOCUS ON DETAIL</span>
          </div>

          <div className="about-stat">
            <strong>∞</strong>
            <span>IDEAS TO BUILD</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;