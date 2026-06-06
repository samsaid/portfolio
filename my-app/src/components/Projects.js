import '../styles/Projects.css'
import Slideshow from './Slideshow.js';

function Projects(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column1'>
                  <h2>Projects</h2>

                <div className='desc'>
                   <div className='experience-item'>
                       <div className='d'>
                           <h5><a href="https://www.youtube.com/watch?v=ZKO3Fh91f9Q" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Augmented Reality Construction Simulator</a></h5>
                           <p>3D game development for a Civil Engineering AR/VR application</p>
                       </div>
                       <div className='skills'>
                           <ul>
                               <li>Unity</li>
                               <li>Blender</li>
                               <li>C#</li>
                               <li>Microsoft HoloLens</li>
                                <li>Mixed Reality Toolkit</li>
                           </ul>
                       </div>
                   </div>

                   <div className='experience-item'>
                       <div className='d'>
                           <h5><a href="https://github.com/samsaid/CSE412-Airline-Tickets" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Flyts</a></h5>
                           <p>Designed and implemented relational database</p>
                       </div>
                       <div className='skills'>
                           <ul>
                               <li>Database: PostgreSQL</li>
                               <li>Front end: React, Bootstrap, Axios</li>
                               <li>Backend: Node JS, Express</li>
                           </ul>
                       </div>
                   </div>

                   <div className='experience-item'>
                       <div className='d'>
                           <h5><a href="https://github.com/samsaid/twitter-sentiment-analysis" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i>&nbsp;Twitter Sentiment Analysis</a></h5>
                           <p>Sentiment analysis on Tweets</p>
                       </div>
                       <div className='skills'>
                           <ul>
                               <li>Python</li>
                               <li>Twitter Developer API</li>
                               <li>Natural Language Toolkit (NLTK)</li>
                           </ul>
                       </div>
                   </div>
                </div>

                </div>
                <div className='column2'>
                {/* <Slideshow></Slideshow> */}
                <div className='cont'>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default Projects;
