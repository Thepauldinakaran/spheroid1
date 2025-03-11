import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar1 from "./components/Navbar1";
import ServicePage from "./components/ServicePage";
import AboutPage from "./components/AboutPage";
import LogoSlider from "./components/LogoSlider";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar1 />
      <LandingPage />
      <ServicePage />
      <AboutPage />
      <LogoSlider />
      <Contact />
    </div>
  );
}

export default App;
