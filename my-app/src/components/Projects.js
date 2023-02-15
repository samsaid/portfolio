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
                   <p>3D game development for a graduate student's AR application</p>
                   <ul>
                       <li>Unity</li>
                       <li>C#</li>
                       <li>Microsoft Mixed Reality Toolkit</li>
                       <li>HoloLens 1 & 2</li>
                   </ul>
                    
                    <h5><a href="https://github.com/samsaid/CSE412-Airline-Tickets" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Flyts</a></h5>


                  <p>a robust full stack application</p>
                   <ul>
                       <li>PostgresSQL, SQL</li>
                       <li>React, Bootstrap, Axios</li>
                       <li>Node.js, Express</li>
                   </ul>
                    <h5><a href="https://github.com/samsaid/twitter-sentiment-analysis" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Twitter Sentiment Analysis</a></h5>
                    <p>python script gathering a batch of tweets and calculating sentiment</p>
                   <ul>
                       <li>Python</li>
                       <li>Twitter API</li>
                       <li>NLP Library</li>
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