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
                            <h5>Bachelor of Science, Computer Science</h5>
                            <ul>
                                <li>Expected December 2021</li>
                                <li>Activities: Computer Science Undergraduate Teaching Assistant, Study Abroad, Engineering Projects in Computer Science</li>
                                <li>Organizations: National Society of Black Engineers (NSBE), Women in Computer Science (WiCS)</li>
                            </ul>
                        </div>
                    </div>
                 </div>
             </div>
       
    );
}
export default About;