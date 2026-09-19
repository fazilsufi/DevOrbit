import "./contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow"></div>
      <div className="contact-grid"></div>

      <div className="container contact-container">

        {/* HEADER */}
        <div className="contact-header">

          <div className="contact-eyebrow">
            <span className="contact-line"></span>
            GET IN TOUCH
          </div>

          <h2 className="contact-title">
            Let's build something
            <br />
            <span>worth launching.</span>
          </h2>

          <p className="contact-intro">
            Have an idea, business or project in mind?
            Tell me what you're building and let's turn it
            into a digital experience.
          </p>

        </div>


        {/* CONTENT */}
        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-info-header">
              <span>START A PROJECT</span>

              <p>
                Whether you need a website, landing page or
                custom web application, send me the details
                and I'll get back to you.
              </p>
            </div>


            <div className="contact-details">

              <a
                href="mailto:fazilsufi29@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  @
                </div>

                <div>
                  <span>EMAIL</span>
                  <strong>fazilsufi29@gmail.com</strong>
                </div>
              </a>


              <div className="contact-detail">
                <div className="contact-detail-icon">
                  ↗
                </div>

                <div>
                  <span>RESPONSE TIME</span>
                  <strong>Usually within 24–48 hours</strong>
                </div>
              </div>


              <div className="contact-detail">
                <div className="contact-detail-icon">
                  ◈
                </div>

                <div>
                  <span>AVAILABLE FOR</span>
                  <strong>Web Projects & Freelance Work</strong>
                </div>
              </div>

            </div>

          </div>


          {/* FORM */}
          <form className="contact-form">

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>


              <div className="contact-field">
                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="xyz@example.com"
                />
              </div>

            </div>


            <div className="contact-field">

              <label htmlFor="project">
                PROJECT TYPE
              </label>

              <select id="project" defaultValue="">
                <option value="" disabled>
                  Select a project type
                </option>

                <option value="business">
                  Business Website
                </option>

                <option value="landing">
                  Landing Page
                </option>

                <option value="web-app">
                  Web Application
                </option>

                <option value="ui-ux">
                  UI / UX Design
                </option>

                <option value="custom">
                  Custom Project
                </option>
              </select>

            </div>


            <div className="contact-field">

              <label htmlFor="message">
                TELL ME ABOUT YOUR PROJECT
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell me about your idea, requirements, timeline or budget..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              <span>SEND PROJECT DETAILS</span>
              <strong>↗</strong>
            </button>

          </form>

        </div>


        {/* BOTTOM */}
        <div className="contact-bottom">

          <span>
            DEVORBIT — DIGITAL DEVELOPMENT
          </span>

          <span>
            BUILD • LAUNCH • GROW
          </span>

        </div>

      </div>
    </section>
  );
}

export default Contact;