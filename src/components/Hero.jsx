import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="eyebrow-line"></span>
                BUILD <span>•</span> LAUNCH <span>•</span> GROW
              </div>

              <h1 className="hero-title">
                Modern websites
                <br />
                <span>built to stand out.</span>
              </h1>

              <p className="hero-description">
                DevOrbit creates fast, responsive and modern websites for
                businesses, creators and brands that want a stronger presence
                online.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="hero-primary-btn">
                  View My Work
                  <span className="btn-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </span>
                </a>

                <a href="#contact" className="hero-secondary-btn">
                  Let's Talk
                </a>
              </div>

              {/* TECH STACK */}
              <div className="hero-tech">
                <span className="tech-label">POWERED BY</span>

                <div className="tech-list">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Git</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="hero-visual">
              {/* Orbital rings */}
              <div className="orbit orbit-large"></div>
              <div className="orbit orbit-medium"></div>
              <div className="orbit orbit-small"></div>

              {/* Orbit particles */}
              <span className="orbit-dot dot-one"></span>
              <span className="orbit-dot dot-two"></span>
              <span className="orbit-dot dot-three"></span>

              {/* Main central object */}
              <div className="hero-core">
                <div className="core-glow"></div>

                <div className="core-inner">
                  <div className="core-orbit"></div>

                  <div className="core-logo">
                    <span className="core-d">D</span>
                    <span className="core-o">O</span>
                  </div>
                </div>
              </div>

              {/* Top floating card */}
              <div className="floating-card floating-card-top">
                <div className="card-icon">&lt;/&gt;</div>

                <div>
                  <span className="card-label">DEVELOPMENT</span>
                  <strong>Clean Code</strong>
                </div>
              </div>

              {/* Bottom floating card */}
              <div className="floating-card floating-card-bottom">
                <div className="status-dot"></div>

                <div>
                  <span className="card-label">WEBSITE STATUS</span>
                  <strong>Fast & Responsive</strong>
                </div>
              </div>

              {/* Small side card */}
              <div className="mini-card mini-card-left">
                <span>01</span>
                <div></div>
                <strong>UI/UX</strong>
              </div>

              {/* Small side card */}
              <div className="mini-card mini-card-right">
                <span>02</span>
                <div></div>
                <strong>WEB</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
