import '../styles/Projects.css'
import ImageSlider from '../components/ImageSlider.js'
import { SliderData } from '../components/SliderData';


function Projects(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <h2>Projects</h2>
                    <ImageSlider slides={SliderData}></ImageSlider>
                </div>
            </div>
        </div>
    );
}
export default Projects;