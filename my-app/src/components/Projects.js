import '../styles/Projects.css'
import Slideshow from './Slideshow.js';

function Projects(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column1'>
                <h2>Projects</h2>

                <div className='desc'>
                   <h5><a href="https://www.youtube.com/watch?v=ZKO3Fh91f9Q" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Senior Capstone Project</a></h5>
                   <p>UX development for Augmented Reality construction simulator application</p>
                   <ul>
                       <li>Unity</li>
                       <li>C#</li>
                       <li>Microsoft HoloLens</li>
                   </ul>
                    
                    <h5><a href="https://github.com/samsaid/CSE412-Airline-Tickets" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Database Management System </a></h5>


                  <p>Interactive relational database</p>
                   <ul>
                       <li>PostgreSQL</li>
                       <li>SQL</li>
                       <li>React</li>
                       <li>JavaScript</li>
                   </ul>
                    <h5><a href="https://github.com/samsaid/twitter-sentiment-analysis" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Twitter Sentiment Analysis</a></h5>
                    <p>Natural language Processing model extracting sentiment from tweets</p>
                   <ul>
                       <li>Python</li>
                       <li>Matlab</li>
                       <li>Twitter API</li>
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