import "./Pricing.css";

const plans = [
  {
    number: "01",
    name: "STARTER",
    price: "₹4,999",
    description:
      "For individuals and small businesses that need a clean professional presence online.",
    features: [
      "1–3 page website",
      "Responsive design",
      "Modern UI",
      "Contact section",
      "Basic SEO setup",
    ],
    button: "GET STARTED",
    featured: false,
  },

  {
    number: "02",
    name: "PROFESSIONAL",
    price: "₹9,999",
    description:
      "For businesses that want a stronger online presence with a more complete website.",
    features: [
      "Up to 6 pages",
      "Custom UI/UX",
      "Responsive design",
      "Interactive sections",
      "Basic SEO setup",
      "Deployment assistance",
    ],
    button: "CHOOSE PLAN",
    featured: true,
  },

  {
    number: "03",
    name: "CUSTOM",
    price: "LET'S TALK",
    description:
      "For larger websites and custom web applications that need a tailored solution.",
    features: [
      "Custom page structure",
      "Advanced React development",
      "Custom functionality",
      "API integration",
      "Performance optimization",
      "Custom requirements",
    ],
    button: "CONTACT ME",
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-glow"></div>
      <div className="pricing-grid"></div>

      <div className="container pricing-container">

        {/* HEADER */}
        <div className="pricing-header">

          <div className="pricing-eyebrow">
            <span className="pricing-line"></span>
            PRICING
          </div>

          <div className="pricing-heading-row">

            <h2 className="pricing-title">
              Simple pricing.
              <br />
              <span>Serious websites.</span>
            </h2>

            <p className="pricing-intro">
              Choose a starting point that fits your project.
              Every website is built around your goals, brand and
              requirements.
            </p>

          </div>
        </div>


        {/* PLANS */}
        <div className="pricing-plans">

          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.featured ? "pricing-featured" : ""
              }`}
              key={plan.number}
            >

              {plan.featured && (
                <div className="pricing-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="pricing-card-top">

                <div className="pricing-number">
                  {plan.number}
                </div>

                <span className="pricing-name">
                  {plan.name}
                </span>

              </div>


              <div className="pricing-price">
                {plan.price}
              </div>


              <p className="pricing-description">
                {plan.description}
              </p>


              <div className="pricing-divider"></div>


              <ul className="pricing-features">

                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}

              </ul>


              <a
                href="#contact"
                className="pricing-button"
              >
                <span>{plan.button}</span>
                <strong>↗</strong>
              </a>

            </article>
          ))}

        </div>


        {/* BOTTOM NOTE */}
        <div className="pricing-bottom">

          <div className="pricing-note">
            <span>✦</span>

            <p>
              Need something different? Every project can be
              customized to your exact requirements.
            </p>
          </div>

          <a href="#contact" className="pricing-custom-link">
            DISCUSS A CUSTOM PROJECT
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Pricing;