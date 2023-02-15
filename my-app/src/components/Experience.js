import '../styles/Experience.css'

function Experience(){
    return(
        
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <h2>Work Experience</h2>
                    <div className='desc'>
                    <h3>American Express</h3>
                        <h4>Software Engineer</h4>
                        <h5>January 2023 - present</h5>
                        <div className='experience-item'>
                            <div className='d'>
                                    <p>Core member of an agile team completing user story development for the UI of a customer-facing web application </p>
                            </div>
                            
                            <div className='skills'>
                            <ul>
                                    <li>React/Redux</li>
                                    <li>Docker</li>
                                    <li>Jenkins</li>
                                </ul>
                            </div>
                        </div>
                    <h3>BlackRock</h3>
                        <h4>  Software Engineer Intern </h4>
                        <h5>Summer 2021</h5>
                        <div className='experience-item'>
                            <div className='d'>
                            
                                <p>Implemented a VSCode plugin that applies syntax highlighting for custom grammar to improve developer productivity</p>

                                
                            </div>
                            <div className='skills'>
                            <ul>
                                    <li>TypeScript</li>
                                    <li>Node.js</li>
                                    <li>Language Parser API</li>
                                </ul>
                            </div>
                            
                        </div>
                        <h4>Software Engineer Intern </h4>
                        <h5>Summer 2020</h5>
                        <div className='experience-item'>
                            <div className='d'>
                                
                                    <p>Worked in BlackRock's Product Group to create features and debug user stories on a web application in production</p>
                                
                            </div>
                            <div className='skills'>
                            <ul>
                                    <li>Angular</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
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