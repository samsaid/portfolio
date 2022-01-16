import '../styles/About.css'

function About(){
    var image = require("../images/samira.jpg");
    return(
        
             <div className='container'>
                 <div className='row'>
                    <div className='column'>
                        <h2>Education</h2>
                        <div className='desc'>
                            <h4>Arizona State University - Ira A. Fulton Schools of Engineering </h4>
                            <ul>
                                <li>Bachelor of Science, Computer Science</li>
                                <li>Graduated December 2021</li>
                                <li>Activities: Computer Science Undergraduate Teaching Assistant, National Society of Black Engineers</li>
                            </ul>
                        </div>
                    </div>
                 </div>
             </div>
       
    );
}
export default About;