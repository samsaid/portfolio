import '../styles/About.css'

function About(){
    return(
             <div className='container'>
                 <div className='row'>
                    <div className='column'>
                        <h2>Education</h2>
                        <div className='desc'>
                            <h4>Arizona State University, Ira A. Fulton Schools of Engineering </h4>
                            <p>B.S. Computer Science, Graduated December 2021</p>

                            <ul>
                                <li><b>Courses:</b> Operating Systems, Design & Analysis of Algorithms, Mobile Application Development, Database Management, Data Visualization, Multimedia Information Systems</li>
                                <li><b>Leadership/Organizations:</b> Undergraduate Teaching Assistant, National Society of Black Engineers, Women in Computer Science, MobileDevs, Code2040, Rewriting the Code</li>
                                <li><b>Awards:</b> Google Scholarship - AnitaB Grace Hopper Celebration, 2nd place team - ASU WiCS 13th Annual Programming Competition</li>
                            </ul>
                        </div>
                    </div>
                 </div>
             </div>
       
    );
}
export default About;