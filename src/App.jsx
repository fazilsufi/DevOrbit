import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Kashmircraft from "./components/Kashmircraft";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main DevOrbit website */}
        <Route path="/" element={<Home />} />

        {/* KashmirCraft project */}
        <Route path="/projects/kashmircraft" element={<Kashmircraft />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;