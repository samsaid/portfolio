import '../styles/Projects.css'
import Slideshow from '../components//Slideshow.js';


function Projects(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column1'>
                    <h2>Projects</h2>
                <div className='desc'>
                   <h5>Senior Capstone Project - ETBIM Research Lab&nbsp;&nbsp; <a href="https://www.youtube.com/watch?v=ZKO3Fh91f9Q" id="projlink"> <i className="fa fa-link"></i></a></h5> 
                   <p>3D Construction site simulator of a playground that provides an interactive contruction building experience in Augmented Reality.</p>
                   <ul>
                       <li>Unity</li>
                       <li>C#</li>
                       <li>Microsoft HoloLens, Mixed Reality Toolkit</li>
                   </ul>
                    
                    <h5>Database Management System and Application&nbsp;&nbsp; <a href="https://cse-412.herokuapp.com/" id="projlink"> <i className="fa fa-link"></i></a> </h5>


                  <p>Deployed relational database system designed as an ER diagram and implemented to interact with a full stack application.</p>
                   <ul>
                       <li>DDL (Data Definition Language)</li>
                       <li>PostgreSQL</li>
                       <li>SQL</li>
                       <li>React</li>
                       <li>JavaScript</li>
                   </ul>
                    <h5>Twitter Sentiment Analysis (NLP)&nbsp;&nbsp; <a href="https://github.com/samsaid/twitter-sentiment-analysis" id="projlink"> <i className="fa fa-link"></i></a></h5>
                    <p>Sentiment analysis model extracting feelings (sentiment) from live tweets based on a polarizing keyword.</p>
                   <ul>
                       <li>Python</li>
                       <li>Matlab (first iteration)</li>
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