import React from 'react'
import '../styles/Nav.css'

import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return (
            <ReactBootStrap.Navbar bg="light" expand="lg">
            <ReactBootStrap.Container fluid>
              <ReactBootStrap.Navbar.Brand href="/#">Samira Said</ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
              <ReactBootStrap.Navbar.Collapse id="navbarScroll">
                <ReactBootStrap.Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Link to="/intro"><ReactBootStrap.Nav.Link href="#intro">Intro</ReactBootStrap.Nav.Link></Link>
                  <Link to="/projects"><ReactBootStrap.Nav.Link href="#projects">Projects</ReactBootStrap.Nav.Link></Link>
                  <Link to="/education"> <ReactBootStrap.Nav.Link href="#education">Education</ReactBootStrap.Nav.Link></Link>
                  <Link to="/experience"> <ReactBootStrap.Nav.Link href="#experience">Experience</ReactBootStrap.Nav.Link></Link>
          
                
                </ReactBootStrap.Nav>
               
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
        );
    }
}



export default Navbar;