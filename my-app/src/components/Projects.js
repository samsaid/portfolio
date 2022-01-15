import '../styles/Projects.css'
import Carousel from 'react-bootstrap/Carousel'  
import React, { Component } from 'react'  



function Projects(){
    var image = require("../images/sam1.jpg");

    return(
<<<<<<< HEAD
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Projects</h2>
                    <div id='carousel'>
                        <div id='carousel-inner'>
                        <Carousel>
                       <Carousel.Item>
                           <img
                           className="d-block w-100"
                           src={image}
                           alt="first slide"
                           />
                       </Carousel.Item>
                       <Carousel.Caption>
                           <h3>caption</h3>
                           <p>test</p>
                       </Carousel.Caption>
                    </Carousel>
                        </div>
                    </div>
                </div>
            </div>
=======
        <div id='projects'>
            <div id='projects-title'>/ projects</div>
>>>>>>> parent of 97ed9af (new format but missing projects)
        </div>
    );
}
export default Projects;