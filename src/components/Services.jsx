import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "◈",
      title: "Business Websites",
      description:
        "Professional websites designed to give your business a strong and credible presence online.",
      tags: ["Responsive", "Modern UI", "SEO Ready"],
    },
    {
      number: "02",
      icon: "⌁",
      title: "Landing Pages",
      description:
        "High-converting landing pages built to present your product, service or idea clearly.",
      tags: ["Fast", "Focused", "Conversion"],
    },
    {
      number: "03",
      icon: "</>",
      title: "Web Applications",
      description:
        "Interactive React applications with smooth experiences, reusable components and modern interfaces.",
      tags: ["React", "Interactive", "Scalable"],
    },
    {
      number: "04",
      icon: "✦",
      title: "UI / UX Design",
      description:
        "Clean and intuitive interfaces that make websites easier to understand, navigate and use.",
      tags: ["Clean UI", "UX Focused", "Modern"],
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-grid"></div>

      <div className="container services-container">

        {/* SECTION HEADER */}
        <div className="services-header">

          <div className="services-eyebrow">
            <span className="services-line"></span>
            WHAT I DO
          </div>

          <div className="services-heading-row">

            <h2 className="services-title">
              Digital solutions
              <br />
              <span>built around you.</span>
            </h2>

            <p className="services-intro">
              From simple business websites to interactive web
              applications, DevOrbit builds digital experiences
              designed to look great and work even better.
            </p>

          </div>
        </div>


        {/* SERVICES GRID */}
        <div className="services-list">

          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-card-top">

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>

              </div>


              <div className="service-card-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>


              <div className="service-card-footer">
                <span>EXPLORE SERVICE</span>
                <span className="service-arrow">↗</span>
              </div>

            </article>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}
        <div className="services-bottom">

          <div className="services-bottom-line"></div>

          <p>
            HAVE A PROJECT IN MIND?
            <a href="#contact"> LET'S BUILD IT.</a>
          </p>

          <div className="services-bottom-line"></div>

        </div>

      </div>
    </section>
  );
}

export default Services;