import { useEffect, useRef } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Photography from "./components/Photography.js";
import Footer from "./components/Footer.js";

function Home() {
  return (
    <>
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        glowRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <div className="cursor-glow" ref={glowRef} />
        <div className="content">
          <div className="col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photography" element={<Photography />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
