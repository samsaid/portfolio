import "./App.css";
import Intro from "./components/Intro.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route exact path="#" element={<Intro/>}/>
          <Route path="#projects" element={<Projects/>}/>
          <Route path="#education" element={<Education/>}/>
          <Route path="#experience" element={<Experience/>}/>
        </Routes>
    </Router>

      <div className="content">
        <div className="col">
          <Intro></Intro>
          <Projects></Projects>
          <Experience></Experience>
          <Experience></Experience>

        </div>
      </div>
    </div>
  );
}

export default App;
