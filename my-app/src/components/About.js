import '../styles/About.css'

function About(){
    var image = require("../images/samira.jpg");
    return(
        <div id='about'>
            <div id='about-title'>/ about me</div>
                <div id='about-content'>
                    <div id='about-description'>I recently graduated from Arizona State University in December 2021 where I majored in Computer Science. 
                    Last summer, I completed a software engineering internship at BlackRock in the summer analyst program.
                    </div>
                    <div id='about-image'><img src={image} id='img'></img></div>
            </div>
        </div>
    );
}
export default About;