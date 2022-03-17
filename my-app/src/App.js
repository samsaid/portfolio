import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import Divider from './components/Divider';



function App() {
  return (
    <div className="App">
       <div className='content'>
         <div className='col'>
         <Intro></Intro>
         <About></About>
         <Projects></Projects>
         <Experience></Experience>
         <Footer></Footer>
       </div>
       </div>
    </div>
  );
}

export default App;
