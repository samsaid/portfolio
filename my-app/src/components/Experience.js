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
                            <ul>
                                    <li>Developed a VSCode extension to provide language support for developers writing schema files for a database
maintained in Apache Cassandra</li>
                            <li>Implemented grammar rule validation and syntax highlighting from database rules using TypeScript and Node.js</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                        <h3>BlackRock</h3>
                        <h4>Software Engineer Intern</h4>
                        <p>Summer 2020</p>
                        <div className='experience-item'>
                            <div className='d'>
                                <ul>
                                    <li>Worked with a team of engineers to manage the front end of company's web product</li>
                            <li>Implemented UI changes in Angular using ag-Grid components, JavaScript, HTML/CSS, Java</li>
                                </ul>
                            </div>
                    
                       
                            
                        </div>
                        <h3>Amkor Technology</h3>
                        <h4>Web Applications Intern</h4>
                        <p>Summer 2019 - Spring 2020</p>
                        <div className='experience-item'>
                            <div className='d'>
                            <ul>
                            <li>Developed a documentation web app to track product errors for company's R&D team</li>
                            <li>Implemented user interface with ExtJS components, HTML/CSS, JavaScript</li>
                                </ul>                            </div>
                           
                            
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;