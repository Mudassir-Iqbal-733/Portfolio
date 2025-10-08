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
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // 🧠 Update scroll progress based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <LoadingBar
        color="#19d6e0"  
        progress={100}   
        height={3}      
        waitingTime={500}
        onLoaderFinished={() => {}}
      />
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
