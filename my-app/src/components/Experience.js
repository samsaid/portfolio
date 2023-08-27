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
                                    <p>Core member of an Agile team developing features for an enterprise web application - tranforming prototypes into functional features with React and API integrations</p>
                            </div>
                            
                            <div className='skills'>
                            <ul>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>Rest APIs</li>
                                </ul>
                            </div>
                        </div>
                    <h3>BlackRock</h3>
                        <h4>  Software Engineer Intern </h4>
                        <h5>Summer 2021</h5>
                        <div className='experience-item'>
                            <div className='d'>
                            
                                <p>Intern on the Aladdin Product Group developing a Visual Studio Code plugin that assists engineers in code quality</p>

                                
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
                                
                                    <p>Intern on the Aladdin Product Group developing feature enhancements and working on bug fixes for a web application</p>
                                
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