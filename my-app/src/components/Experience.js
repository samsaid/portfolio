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
                        <div className='experience-item'>
                            <div className='d'>
                                <h4>Software Engineer II</h4>
                                <h5>2023 - Present</h5>
                                <p>Front end software engineer on the Amex Debit Card platform team</p>
                            </div>
                            <div className='skills'>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>Node + Express</li>
                                    <li>Rest APIs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="same-company">
                    <h3>BlackRock</h3>
                    <div className="section-indent">
                        <div className='experience-item'>
                            <div className='d'>
                                <h4>Software Engineer Intern</h4>
                                <h5>Summer 2021</h5>
                                <p>Returning intern on the Aladdin Product Group building a developer productivity tool</p>
                            </div>
                            <div className='skills'>
                                <ul>
                                    <li>TypeScript</li>
                                    <li>Node.js</li>
                                    <li>Language Parser API</li>
                                </ul>
                            </div>
                        </div>
                        <div className='experience-item'>
                            <div className='d'>
                                <h4>Software Engineer Intern</h4>
                                <h5>Summer 2020</h5>
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
