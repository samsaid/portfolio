import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
function App() {
  return (
    <div className="App">
       <Nav></Nav>

       <div className='content'>

         <div className='col'>
         <Intro></Intro>
         <Projects></Projects>
         <About></About>
         <Experience></Experience>
         <Footer></Footer>
       </div>
       </div>
    </div>
  );
}

export default App;
