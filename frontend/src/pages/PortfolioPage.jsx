import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Showreel from "../components/Showreel";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Tools from "../components/Tools";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Journal from "../components/Journal";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const PortfolioPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Showreel />
        <Portfolio />
        <About />
        <Services />
        <Process />
        <Tools />
        <Testimonials />
        <Pricing />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
