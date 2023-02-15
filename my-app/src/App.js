import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'


function App() {
    return (
        <div className="App">
            <div className='content'>
                <div className='col'>
                    <Intro></Intro>
                    <Projects></Projects>
                    <Experience></Experience>
                    <About></About>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

export default App;
