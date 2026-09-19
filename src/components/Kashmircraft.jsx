import React, { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    title: "Royal Pashmina",
    category: "Pashmina",
    price: "$245",
    description:
      "A feather-light handwoven pashmina shawl finished with delicate traditional embroidery.",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1000&q=85",
    colors: ["#c8a66b", "#eadcc5", "#8b2635"],
  },
  {
    id: 2,
    title: "Kani Heritage Weave",
    category: "Kani Weaving",
    price: "$390",
    description:
      "Inspired by the gardens of Kashmir, this intricate kani shawl takes months to complete.",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=1000&q=85",
    colors: ["#9e2935", "#d3a84c", "#224d3b"],
  },
  {
    id: 3,
    title: "Saffron Sozni",
    category: "Sozni Embroidery",
    price: "$315",
    description:
      "Fine needlework blooms across soft wool in a warm saffron and ivory palette.",
    image:
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1000&q=85",
    colors: ["#e7a928", "#f7f0df", "#6d2939"],
  },
  {
    id: 4,
    title: "Gulmarg Bloom",
    category: "Embroidered Shawls",
    price: "$280",
    description:
      "A floral celebration of Kashmir's alpine meadows, embroidered by skilled artisans.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
    colors: ["#d6b37a", "#b45d53", "#355d49"],
  },
  {
    id: 5,
    title: "Noor Silk Wrap",
    category: "Silk Shawls",
    price: "$185",
    description:
      "A luminous silk wrap with hand-finished borders for effortless evening elegance.",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",
    colors: ["#1d4750", "#d6b273", "#f4e8d0"],
  },
  {
    id: 6,
    title: "Walnut Garden",
    category: "Luxury Collection",
    price: "$450",
    description:
      "A collector's piece featuring rich walnut tones and an heirloom paisley border.",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1000&q=85",
    colors: ["#50362c", "#b89158", "#d9c4a2"],
  },
];

const categories = [
  "All",
  "Pashmina",
  "Kani Weaving",
  "Sozni Embroidery",
  "Embroidered Shawls",
  "Silk Shawls",
  "Luxury Collection",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? "open" : ""}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

export default function KashmiriWebsite() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="kashmiri-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        :root {
          --ink: #202c29;
          --muted: #6d746f;
          --cream: #f6f1e8;
          --paper: #fffdf8;
          --green: #183d35;
          --green-light: #28564b;
          --gold: #bd8a3d;
          --red: #8b3039;
          --line: rgba(32, 44, 41, 0.14);
          --shadow: 0 18px 50px rgba(34, 48, 42, 0.1);
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          color: var(--ink);
          background: var(--paper);
          font-family: "DM Sans", sans-serif;
        }

        button, input { font: inherit; }
        button { cursor: pointer; }

        .kashmiri-site {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 95% 5%, rgba(189,138,61,.11), transparent 21rem),
            var(--paper);
        }

        .topbar {
          background: var(--green);
          color: #f8f2e5;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding: 10px 5vw;
          text-align: center;
        }

        .navbar {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
          border-bottom: 1px solid var(--line);
          background: rgba(255,253,248,.88);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .logo {
          color: var(--green);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 11px;
          line-height: 1;
        }

        .logo-mark {
          width: 34px;
          height: 34px;
          border: 1px solid var(--gold);
          border-radius: 50% 50% 50% 8px;
          transform: rotate(-45deg);
          display: grid;
          place-items: center;
        }

        .logo-mark::after {
          content: "✦";
          color: var(--gold);
          transform: rotate(45deg);
          font-size: 17px;
        }

        .logo-copy strong {
          display: block;
          font-family: "Playfair Display", serif;
          font-size: 21px;
          letter-spacing: .04em;
        }

        .logo-copy small {
          display: block;
          margin-top: 5px;
          color: var(--gold);
          font-size: 8px;
          letter-spacing: .22em;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: var(--ink);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .08em;
          text-decoration: none;
          text-transform: uppercase;
        }

        .nav-links a:hover { color: var(--gold); }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .bag-button {
          background: none;
          border: 0;
          color: var(--ink);
          font-size: 21px;
          position: relative;
        }

        .bag-count {
          background: var(--red);
          border: 2px solid var(--paper);
          border-radius: 50%;
          color: white;
          font-size: 9px;
          height: 17px;
          line-height: 14px;
          position: absolute;
          right: -8px;
          text-align: center;
          top: -8px;
          width: 17px;
        }

        .menu-button { display: none; border: 0; background: none; }
        .menu-icon { display: grid; gap: 5px; }
        .menu-icon i { width: 24px; height: 1px; background: var(--ink); display: block; transition: .3s; }
        .menu-icon.open i:first-child { transform: translateY(3px) rotate(45deg); }
        .menu-icon.open i:last-child { transform: translateY(-3px) rotate(-45deg); }

        .hero {
          min-height: 680px;
          padding: 74px 5vw 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 8vw;
          background: linear-gradient(116deg, #f6f1e8 0%, #fbf8f1 48%, #eee6d8 100%);
          position: relative;
        }

        .hero::after {
          content: "K";
          position: absolute;
          font-family: "Playfair Display", serif;
          font-size: 390px;
          color: rgba(189,138,61,.055);
          right: 8%;
          bottom: -100px;
          pointer-events: none;
        }

        .eyebrow {
          color: var(--gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .22em;
          margin-bottom: 21px;
          text-transform: uppercase;
        }

        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-family: "Playfair Display", serif; }

        h1 {
          color: var(--green);
          font-size: clamp(47px, 6vw, 83px);
          font-weight: 600;
          letter-spacing: -.045em;
          line-height: .98;
          margin-bottom: 26px;
          max-width: 620px;
        }

        h1 em { color: var(--red); font-style: italic; }

        .hero-description {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
          max-width: 450px;
          margin-bottom: 35px;
        }

        .primary-button {
          align-items: center;
          background: var(--green);
          border: 1px solid var(--green);
          color: white;
          display: inline-flex;
          gap: 22px;
          padding: 16px 22px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          transition: .25s;
        }

        .primary-button:hover { background: var(--gold); border-color: var(--gold); transform: translateY(-2px); }

        .hero-note {
          color: var(--muted);
          font-family: "Playfair Display", serif;
          font-size: 13px;
          font-style: italic;
          margin: 26px 0 0 25px;
        }

        .hero-art {
          height: 530px;
          max-width: 520px;
          justify-self: end;
          position: relative;
          width: 100%;
        }

        .hero-image {
          height: 100%;
          object-fit: cover;
          width: 84%;
          display: block;
          clip-path: polygon(13% 0, 100% 0, 100% 91%, 84% 100%, 0 100%, 0 10%);
        }

        .hero-frame {
          border: 1px solid var(--gold);
          height: 88%;
          left: 8%;
          position: absolute;
          top: 6%;
          width: 84%;
          z-index: 2;
          pointer-events: none;
        }

        .hero-badge {
          align-items: center;
          background: var(--red);
          border-radius: 50%;
          color: #fff8ec;
          display: flex;
          flex-direction: column;
          height: 112px;
          justify-content: center;
          position: absolute;
          right: 0;
          top: 52px;
          width: 112px;
          z-index: 3;
        }

        .hero-badge span:first-child { font-family: "Playfair Display", serif; font-size: 29px; }
        .hero-badge span:last-child { font-size: 8px; letter-spacing: .13em; margin-top: 4px; text-transform: uppercase; }

        .heritage-strip {
          align-items: center;
          background: var(--green);
          color: white;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 27px 5vw;
        }

        .heritage-item {
          align-items: center;
          border-right: 1px solid rgba(255,255,255,.18);
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .heritage-item:last-child { border: 0; }
        .heritage-icon { color: #d7ae62; font-size: 25px; }
        .heritage-item strong { display: block; font-family: "Playfair Display", serif; font-size: 15px; font-weight: 500; }
        .heritage-item span { color: rgba(255,255,255,.65); display: block; font-size: 10px; letter-spacing: .1em; margin-top: 4px; text-transform: uppercase; }

        .collection-section { padding: 110px 5vw 125px; }

        .section-heading {
          align-items: end;
          display: flex;
          justify-content: space-between;
          margin-bottom: 39px;
        }

        .section-heading h2 {
          color: var(--green);
          font-size: clamp(35px, 4vw, 55px);
          line-height: 1;
          margin: 0;
        }

        .section-heading h2 em { color: var(--red); font-weight: 500; }
        .section-intro { color: var(--muted); font-size: 14px; line-height: 1.7; max-width: 295px; margin: 0; }

        .filters {
          border-bottom: 1px solid var(--line);
          display: flex;
          gap: 27px;
          margin-bottom: 38px;
          overflow-x: auto;
          padding-bottom: 15px;
          scrollbar-width: none;
        }

        .filters::-webkit-scrollbar { display: none; }

        .filter {
          background: none;
          border: 0;
          color: var(--muted);
          flex: 0 0 auto;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          padding: 0;
          text-transform: uppercase;
        }

        .filter.active, .filter:hover { color: var(--red); }

        .product-grid {
          display: grid;
          gap: 28px 20px;
          grid-template-columns: repeat(3, 1fr);
        }

        .product-card { min-width: 0; }

        .product-image-wrap {
          aspect-ratio: .86;
          background: #e9e0d0;
          overflow: hidden;
          position: relative;
        }

        .product-image {
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
          width: 100%;
        }

        .product-card:hover .product-image { transform: scale(1.05); }

        .quick-view {
          background: rgba(255,253,248,.95);
          border: 0;
          bottom: 17px;
          color: var(--green);
          font-size: 10px;
          font-weight: 700;
          left: 17px;
          letter-spacing: .13em;
          opacity: 0;
          padding: 13px 17px;
          position: absolute;
          text-transform: uppercase;
          transform: translateY(10px);
          transition: .3s;
        }

        .product-card:hover .quick-view { opacity: 1; transform: translateY(0); }
        .product-label { color: var(--gold); font-size: 9px; font-weight: 700; letter-spacing: .15em; margin: 20px 0 8px; text-transform: uppercase; }
        .product-info { align-items: start; display: flex; justify-content: space-between; gap: 15px; }
        .product-info h3 { color: var(--green); font-size: 22px; font-weight: 600; margin: 0; }
        .product-price { color: var(--red); font-size: 14px; font-weight: 700; white-space: nowrap; }
        .product-description { color: var(--muted); font-size: 12px; line-height: 1.6; margin: 9px 0 0; max-width: 300px; }

        .story {
          background: var(--cream);
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          min-height: 560px;
        }

        .story-image { min-height: 500px; background: url("https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85") center/cover; }
        .story-content { align-self: center; max-width: 550px; padding: 70px 8vw 70px 9vw; }
        .story-content h2 { color: var(--green); font-size: clamp(37px, 4vw, 59px); line-height: 1.02; margin-bottom: 24px; }
        .story-content h2 em { color: var(--red); font-weight: 500; }
        .story-content p { color: var(--muted); font-size: 15px; line-height: 1.9; }
        .signature { color: var(--green); font-family: "Playfair Display", serif; font-size: 21px; font-style: italic; margin-top: 30px; }
        .signature small { color: var(--gold); display: block; font-family: "DM Sans", sans-serif; font-size: 9px; font-style: normal; letter-spacing: .13em; margin-top: 7px; text-transform: uppercase; }

        .newsletter {
          background: var(--red);
          color: white;
          padding: 70px 5vw;
          text-align: center;
        }

        .newsletter h2 { font-size: 37px; margin-bottom: 10px; }
        .newsletter p { color: rgba(255,255,255,.76); font-size: 13px; }
        .newsletter-form { display: flex; margin: 27px auto 0; max-width: 450px; }
        .newsletter-form input { border: 0; flex: 1; min-width: 0; padding: 15px 17px; outline: none; }
        .newsletter-form button { background: var(--gold); border: 0; color: white; font-size: 10px; font-weight: 700; letter-spacing: .1em; padding: 0 19px; text-transform: uppercase; }

        footer { background: var(--green); color: white; padding: 42px 5vw 30px; }
        .footer-main { align-items: start; display: flex; justify-content: space-between; gap: 30px; }
        .footer-brand { max-width: 280px; }
        .footer-brand .logo { color: white; }
        .footer-brand p { color: rgba(255,255,255,.6); font-size: 12px; line-height: 1.7; margin-top: 16px; }
        .footer-links { display: flex; gap: 50px; }
        .footer-links h4 { color: #d7ae62; font-size: 10px; letter-spacing: .15em; margin: 0 0 17px; text-transform: uppercase; }
        .footer-links a { color: rgba(255,255,255,.75); display: block; font-size: 12px; margin-bottom: 10px; text-decoration: none; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,.15); color: rgba(255,255,255,.46); font-size: 10px; margin-top: 40px; padding-top: 20px; }

        .modal-backdrop { align-items: center; background: rgba(12,28,24,.68); display: flex; inset: 0; justify-content: center; padding: 20px; position: fixed; z-index: 50; }
        .modal { background: var(--paper); display: grid; grid-template-columns: 1fr 1fr; max-width: 820px; overflow: hidden; position: relative; width: 100%; }
        .modal-image { min-height: 440px; background: #e8ded0; }
        .modal-image img { height: 100%; object-fit: cover; width: 100%; }
        .modal-content { padding: 60px 43px; }
        .modal-content h2 { color: var(--green); font-size: 38px; line-height: 1.05; margin-bottom: 16px; }
        .modal-content p { color: var(--muted); font-size: 14px; line-height: 1.8; }
        .modal-price { color: var(--red); font-size: 23px; font-weight: 700; margin: 25px 0; }
        .close-button { background: none; border: 0; color: var(--ink); font-size: 26px; position: absolute; right: 16px; top: 12px; }

        @media (max-width: 850px) {
          .nav-links { background: var(--paper); box-shadow: var(--shadow); display: none; flex-direction: column; gap: 23px; left: 0; padding: 27px 5vw; position: absolute; right: 0; top: 82px; }
          .nav-links.show { display: flex; }
          .menu-button { display: block; }
          .hero { gap: 40px; grid-template-columns: 1fr; padding-top: 64px; }
          .hero-art { justify-self: center; max-width: 500px; }
          .heritage-strip { gap: 25px; grid-template-columns: 1fr; }
          .heritage-item { border-bottom: 1px solid rgba(255,255,255,.18); border-right: 0; justify-content: flex-start; padding-bottom: 18px; }
          .heritage-item:last-child { border-bottom: 0; padding-bottom: 0; }
          .product-grid { grid-template-columns: repeat(2, 1fr); }
          .story { grid-template-columns: 1fr; }
          .story-image { min-height: 400px; }
        }

        @media (max-width: 550px) {
          .navbar { height: 72px; }
          .nav-links { top: 72px; }
          .hero { min-height: auto; padding: 54px 6vw 65px; }
          h1 { font-size: 50px; }
          .hero-art { height: 390px; }
          .section-heading { align-items: start; flex-direction: column; gap: 20px; }
          .collection-section { padding: 75px 6vw 85px; }
          .product-grid { gap: 30px 13px; }
          .product-info { display: block; }
          .product-info h3 { font-size: 18px; }
          .product-price { display: block; margin-top: 6px; }
          .product-description { font-size: 11px; }
          .quick-view { opacity: 1; transform: none; }
          .footer-main { flex-direction: column; }
          .footer-links { gap: 45px; }
          .modal { display: block; max-height: 90vh; overflow-y: auto; }
          .modal-image { min-height: 280px; }
          .modal-content { padding: 32px 26px; }
        }
      `}</style>

      <div className="topbar">
        Complimentary delivery on orders over $150 · Crafted in Kashmir
      </div>

      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark" />
          <span className="logo-copy">
            <strong>Gulnaar</strong>
            <small>House of Kashmir</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="bag-button" aria-label="Shopping bag">
            ♧<span className="bag-count">0</span>
          </button>
          <button
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">The Art of Kashmir</div>
            <h1>Woven with <em>patience.</em> Worn with pride.</h1>
            <p className="hero-description">
              Discover heirloom shawls and timeless handicrafts, made slowly
              by the hands of Kashmir&apos;s finest artisans.
            </p>
            <a className="primary-button" href="#collection">
              Explore the collection <ArrowIcon />
            </a>
            <p className="hero-note">Every thread carries a story.</p>
          </div>

          <div className="hero-art">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
              alt="Beautiful handcrafted textile"
            />
            <div className="hero-frame" />
            <div className="hero-badge">
              <span>Est.</span>
              <span>1987 · Srinagar</span>
            </div>
          </div>
        </section>

        <section className="heritage-strip">
          <div className="heritage-item">
            <span className="heritage-icon">✧</span>
            <div>
              <strong>Handcrafted</strong>
              <span>Made by hand, never mass made</span>
            </div>
          </div>
          <div className="heritage-item">
            <span className="heritage-icon">❋</span>
            <div>
              <strong>Authentic Materials</strong>
              <span>Pure pashmina &amp; natural silk</span>
            </div>
          </div>
          <div className="heritage-item">
            <span className="heritage-icon">♡</span>
            <div>
              <strong>Fair &amp; Thoughtful</strong>
              <span>Supporting artisan families</span>
            </div>
          </div>
        </section>

        <section className="collection-section" id="collection">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Curated for you</div>
              <h2>Our <em>collection</em></h2>
            </div>
            <p className="section-intro">
              Pieces made to be treasured today, and passed down tomorrow.
            </p>
          </div>

          <div className="filters" role="tablist" aria-label="Product categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />
                  <button
                    className="quick-view"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Quick view <ArrowIcon />
                  </button>
                </div>
                <div className="product-label">{product.category}</div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <span className="product-price">{product.price}</span>
                </div>
                <p className="product-description">{product.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story" id="story">
          <div className="story-image" role="img" aria-label="Traditional Kashmiri craftsmanship" />
          <div className="story-content">
            <div className="eyebrow">Our story</div>
            <h2>Some things are worth the <em>wait.</em></h2>
            <p>
              In the valleys of Kashmir, craft is more than a profession. It
              is a language passed from one generation to the next. Our
              collection brings these living traditions to your wardrobe while
              keeping every artisan at the heart of the story.
            </p>
            <p>
              From the first sketch to the last hand-stitched detail, each
              piece is created with patience, skill, and deep respect for the
              material.
            </p>
            <div className="signature">
              With warmth, Aaliya
              <small>Founder, Gulnaar</small>
            </div>
          </div>
        </section>

        <section className="newsletter" id="contact">
          <div className="eyebrow" style={{ color: "#e1bd79" }}>Stay connected</div>
          <h2>Notes from Kashmir</h2>
          <p>Be the first to discover new pieces, artisan stories, and seasonal edits.</p>

          {subscribed ? (
            <p style={{ color: "#fff", fontWeight: 700 }}>
              Thank you — welcome to the Gulnaar journal.
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-mark" />
              <span className="logo-copy">
                <strong>Gulnaar</strong>
                <small>House of Kashmir</small>
              </span>
            </a>
            <p>
              Timeless Kashmiri craft for modern living. Made with patience,
              purpose, and pride.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <a href="#collection">All collections</a>
              <a href="#story">Our story</a>
              <a href="#contact">Journal</a>
            </div>
            <div>
              <h4>Connect</h4>
              <a href="mailto:hello@gulnaar.com">Email us</a>
              <a href="#contact">Instagram</a>
              <a href="#contact">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 Gulnaar. Crafted with love in Kashmir.
        </div>
      </footer>

      {selectedProduct && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProduct(null);
          }}
        >
          <div className="modal" role="dialog" aria-modal="true">
            <button
              className="close-button"
              aria-label="Close product details"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="modal-image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="modal-content">
              <div className="eyebrow">{selectedProduct.category}</div>
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
              <div className="modal-price">{selectedProduct.price}</div>
              <button
                className="primary-button"
                onClick={() => setSelectedProduct(null)}
              >
                Add to enquiry <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}