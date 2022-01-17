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
                   <h5>Senior Capstone Project</h5>
                   <ul>
                       <li>Unity</li>
                       <li>C#</li>
                   </ul>
                    <h5>Database Management System and Application</h5>
                   <ul>
                       <li>PostgresSQL</li>
                       <li>SQL</li>
                       <li>React</li>
                       <li>JavaScript</li>
                   </ul>
                    <h5>Twitter Sentiment Analysis (NLP)</h5>
                   <ul>
                       <li>Python</li>
                       <li>MATLAB</li>
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