import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App">
       <div className='content'>
         <Intro></Intro>
         <About></About>
       </div>
    </div>
  );
}

export default App;
