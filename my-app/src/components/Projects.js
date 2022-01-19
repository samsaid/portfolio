import '../styles/Projects.css'
import ImageSlider from '../components/ImageSlider.js'
import { SliderData } from '../components/SliderData';
import Slideshow from '../components//Slideshow.js';


function Projects(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column1'>
                    <h2>Projects</h2>
                <div className='desc'>
                   <h5>Senior Capstone Project - ETBIM Research Lab&nbsp;&nbsp; <a href="https://www.youtube.com/watch?v=ZKO3Fh91f9Q" id="projlink"> <i class="fa fa-link"></i></a></h5> 
                   <p>Software development for a HoloLens Augmented Reality application of a construction simulator to teach students.</p>
                   <ul>
                       <li>Unity</li>
                       <li>C#</li>
                       <li>Microsoft HoloLens</li>
                   </ul>
                    
                    <h5>Database Management System and Application&nbsp;&nbsp; <a href="https://cse-412.herokuapp.com/" id="projlink"> <i class="fa fa-link"></i></a> </h5>


                  <p>Relational database system designed as an ER diagram and implemented to interact with a full stack application.</p>
                   <ul>
                       <li>DDL (Data Definition Language)</li>
                       <li>PostgreSQL</li>
                       <li>SQL</li>
                       <li>React</li>
                       <li>JavaScript</li>
                   </ul>
                    <h5>Twitter Sentiment Analysis (NLP)&nbsp;&nbsp; <a href="https://github.com/samsaid/twitter-sentiment-analysis" id="projlink"> <i class="fa fa-link"></i></a></h5>
                    <p>Sentiment analysis model extracting feelings (sentiment) from live tweets based on a polarizing keyword.</p>
                   <ul>
                       <li>Python</li>
                       <li>Statistics</li>
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