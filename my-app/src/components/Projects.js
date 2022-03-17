import '../styles/Projects.css'
import Slideshow from './Slideshow.js';


function Projects(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column1'>
                <h2>Projects</h2>

                <div className='desc'>
                   <h5><a href="https://www.youtube.com/watch?v=ZKO3Fh91f9Q" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i></a>&nbsp;&nbsp;Senior Capstone Project </h5> 
                   <p>Augmented Reality construction simulator for HoloLens</p>
                   <ul>
                       <li>Unity</li>
                       <li>C#</li>
                       <li>Microsoft HoloLens</li>
                   </ul>
                    
                    <h5><a href="https://cse-412.herokuapp.com/" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i></a>&nbsp;&nbsp;Database Management System </h5>


                  <p>Relational database system with a full stack application</p>
                   <ul>
                       <li>PostgreSQL</li>
                       <li>SQL</li>
                       <li>React</li>
                       <li>JavaScript</li>
                   </ul>
                    <h5><a href="https://github.com/samsaid/twitter-sentiment-analysis" className="projlink float-on-hover" target="_blank" rel="noopener noreferrer"> <i className="fa fa-link"></i></a>&nbsp;&nbsp;Twitter Sentiment Analysis</h5>
                    <p>Natural language Processing model on tweets</p>
                   <ul>
                       <li>Python</li>
                       <li>Matlab</li>
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