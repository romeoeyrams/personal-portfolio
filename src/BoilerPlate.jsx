import React from "react";
// import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer"
import SmoothScroll from "./SmoothScroll"
import ScrollToTop from "./ScrollToTop";
import NavMenu from "./components/NavMenu/NavMenu";

// import ScrollToTop from "./ScrollToTop";

function BoilerPlate() {
  return (
    <>
      <BrowserRouter>
      <NavMenu />
      {/* <NavBar /> */}
      {/* <SmoothScroll> */}
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </SmoothScroll> */}
      </BrowserRouter>
      
      <Footer />
    </>
    
  );
}

export default BoilerPlate;
