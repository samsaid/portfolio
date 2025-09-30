import '../styles/Experience.css'

function Experience(){
    return(
        
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <h2>Experience</h2>
                    <div className='desc'>
                    <h3>American Express</h3>
                    <div className="section-indent">
                        <h4>Software Engineer</h4>
                        <h5>01.2023 - Present</h5>
                        <div className='experience-item'>
                            <div className='d'>
                                <p>Full time software engineer working on the Amex Debit Card product team.</p>
                            </div>
                            
                            <div className='skills'>
                            <ul>
                                    <li>React + Node</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>Apache Spark</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    <div className="same-company">
                    <h3>BlackRock</h3>
                    <div className="section-indent">
                        <h4>  Software Engineer Intern </h4>
                        <h5>05.2021 - 08.2021</h5>
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
                        <h5>05.2020 - 08.2020</h5>
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
            </div>
        </div>
    );
}
export default Experience;