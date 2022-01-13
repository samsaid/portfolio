import '../styles/About.css'

function About(){
    var image = require("../images/samira.jpg");
    return(
        
             <div className='container'>
                 <div className='row'>
                    <div className='column'>
                        <h2>Education</h2>
                        <div className='desc'>
                            <p>Ira A. Fulton Schools of Engineering at Arizona State University</p>
                            <ul>
                                <li>Bachelor of Science in Computer Science</li>
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