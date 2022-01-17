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
                </div>
                <div className='column2'>
                
                <div className='cont'>
                    <Slideshow></Slideshow> 
                    </div>

                </div>
                
              
            </div>
        </div>
    );
}
export default Projects;