import '../styles/Projects.css'
import Slideshow from './Slideshow.js';

function Projects(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column1'>
                  <h2>Projects</h2>
               

                <div className='desc'>
                   <h5><a href="https://www.youtube.com/watch?v=ZKO3Fh91f9Q" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Augmented Reality Construction Simulator</a></h5>
                   <p>3D development for a Civil Engineering educational game AR/VR application</p>
                   <ul>
                    <li>C#</li>
                       <li>Unity 3D</li>
                       <li>Mixed Reality Toolkit (MRTK-Unity)</li>
                       <li>Microsoft HoloLens</li>
                   </ul>
                    
                    <h5><a href="https://github.com/samsaid/CSE412-Airline-Tickets" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Flyts</a></h5>


                  <p>Designed and implemented relational database</p>
                   <ul>
                       <li>Database: PostgreSQL</li>
                       <li>Front end: React, Bootstrap, Axios</li>
                       <li>Backend: Node JS, Express</li>
                   </ul>
                    <h5><a href="https://github.com/samsaid/twitter-sentiment-analysis" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Twitter Sentiment Analysis</a></h5>
                    <p>Sentiment analysis on Tweets</p>
                   <ul>
                       <li>Python</li>
                       <li>Twitter Developer API</li>
                       <li>Natural Language Toolkit (NLTK)</li>
                   </ul>             
                </div>

                </div>
                <div className='column2'>
                <Slideshow></Slideshow>
                <div className='cont'>
                    </div>

                </div>
                
              
            </div>
        </div>
    );
}
export default Projects;