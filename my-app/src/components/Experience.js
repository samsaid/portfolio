import '../styles/Experience.css'

function Experience(){
    return(
        
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <h2>Experience</h2>
                    <div className='desc'>
                    <h3>BlackRock</h3>
                        <h4>Sofware Engineer Intern </h4>
                        <p>Summer 2021</p>
                        <div className='experience-item'>
                            <div className='d'>
                            <p>Interned for the Aladdin Product Group (APG) Data Layer Team developing a Visual 
                                Studio Code plugin to improve developer productivity.</p>
                            </div>
                            <div className='skills'>
                            <ul>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>VS Code</li>
                            <li>Regex</li>
                        </ul>
                            </div>
                        </div>
                        
                        <h3>BlackRock</h3>
                        <h4>Software Engineer Intern</h4>
                        <p>Summer 2020</p>
                        <div className='experience-item'>
                            <div className='d'>
                            <p>Interned for the Aladdin Product Group (APG) Active Tools Team developing new features and solving bugs in tickets for an Angular application used by internal customers.</p>
                            </div>
                            <div className='skills'>
                            <ul>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Angular</li>
                            <li>Java</li>

                        </ul>
                            </div>
                       
                            
                        </div>
                        <h3>Amkor Technology</h3>
                        <h4>Web Applications Intern/Co-op</h4>
                        <p>Summer 2019 - Spring 2020</p>
                        <div className='experience-item'>
                            <div className='d'>
                            <p>Interned on the Web Applications Team and completed two projects developing a web front end for native applications.  </p>
                            </div>
                            <div className='skills'>
                            <ul>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Ext JS</li>
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