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
                        <h5>Summer 2020</h5>
                        <ul>
                            <li>Developed a functional Visual Studio Code plug-in tool aimed to reduce debugging time for 
                                software developers during file insertion into an Apache Cassandra database.</li>
                            <li>Participated in daily standup meetings, practiced communication while working with a team remotely, 
                                and documented research and project progress.</li>
                                <li>Tools: VSCode, TypeScript, Node.js</li>
                        </ul>
                        
                        <h4>Software Engineer Intern</h4>
                        <h5>Summer 2021</h5>
                        <ul>
                            <li>Solved bugs and developed new features from tickets for a full 
                                stack web application used by portfolio managers.</li>
                            <li>Demonstrated teamwork skills using collaboration tools JIRA, Bitbucket, and Git version control.</li>
                            <li>Tools: JavaScript, Angular, Node.js</li>
                        </ul>
                        <br></br>
                        <h3>Amkor Technology</h3>
                        <h4>Web Applications Intern/Co-op</h4>
                        <h5>Summer 2019-Winter 2020</h5>
                        <ul>
                            <li>Implemented a new front end on the web for a native legacy application 
                                which stores documents for product defects by employees in the company’s semiconductor factory.</li>
                            <li> Launched application to production and implemented changes from user experience feedback.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;