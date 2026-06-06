import '../styles/About.css'

function About() {
    return (
        <div className='container' id='about'>
            <div className='row'>
                <div className='column'>
                    <h2>Education</h2>
                    <div className='desc'>
                        <h4>Arizona State University, Ira A. Fulton Schools of Engineering</h4>
                        <ul>
                            <li>B.S. Computer Science, Dec 2021</li>
                            <li>Clubs: National Society Of Black Engineers (NSBE), Rewriting the Code, Code2040, Women in Computer Science</li>
                            <li>Hobbies: Film photography, Strength Training, Pickleball, Making matcha</li>
                            <li>Interests: AI, Web Accessibility, User Experience, Data Engineering </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
