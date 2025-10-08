import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      
      <div
        className="fixed bottom-6 right-6 z-50"
        style={{ width: 70, height: 70 }}
      >
        <CircularProgressbar
          value={scrollProgress}
          text={`${Math.round(scrollProgress)}%`}
          styles={buildStyles({
            textColor: "#19d6e0",
            pathColor: "#19d6e0",
            trailColor: "#1e293b",
            textSize: "20px",
            pathTransitionDuration: 0.2,
          })}
        />
      </div>
    </>
  );
};

export default App;
