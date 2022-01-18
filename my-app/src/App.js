import "./App.css";
import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
function App() {
  return (
    <div className="App">
<ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Container fluid>
    <ReactBootStrap.Navbar.Brand href="#">Navbar scroll</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
    <ReactBootStrap.Navbar.Collapse id="navbarScroll">
      <ReactBootStrap.Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <ReactBootStrap.Nav.Link href="#intro">Intro</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#projects">Projects</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#education">Education</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#experience">Experience</ReactBootStrap.Nav.Link>

      
      </ReactBootStrap.Nav>
     
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
      <div className="content">
        <div className="col">
          <Intro></Intro>
          <Projects></Projects>
          <About></About>
          <Experience></Experience>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
