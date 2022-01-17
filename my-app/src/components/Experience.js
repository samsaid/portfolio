import '../styles/Experience.css'

function Experience(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <h2>Experience</h2>
                    <div className='desc'>
                    <h3>BlackRock</h3>
                        <h4>Sofware Engineer Intern</h4>
                        <h5>Summer 2021</h5>
                        <div className='experience-item'>
                            <div className='d'>
                            <p>Interned for the Aladdin Product Group (APG) Data Layer Team developing a Visual Studio Code plugin that implements syntax highlighting on a file based on database rules from an Apache Database.</p>
                            </div>
                            <div className='skills'>
                            <ul>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>VS Code</li>
                        </ul>
                            </div>
                        </div>
                        
                        
                        <h4>Software Engineer Intern</h4>
                        <h5>Summer 2020</h5>
                        <div className='experience-item'>
                            <div className='d'>
                            <p>Interned for the Aladdin Product Group (APG) Active Tools team developing new features and solving bugs in tickets for an application used by internal customers.</p>
                            </div>
                            <div className='skills'>
                            <ul>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Java</li>
                            <li>Angular</li>
                        </ul>
                            </div>
                       
                            
                        </div>

                        <h3>Amkor Technology</h3>
                        <h4>Web Applications Intern/Co-op</h4>
                        <h5>Summer 2019 - Winter 2020</h5>
                        <div className='experience-item'>
                            <div className='d'>
                            <p>Interned on the Web Applications team to develop a web front end for legacy native applications. Completed and maintained two projects during internship duration. </p>
                            </div>
                            <div className='skills'>
                            <ul>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                        </ul>
                            </div>
                            
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;