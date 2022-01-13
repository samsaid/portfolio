import '../styles/Intro.css'

function Intro() {
  var image = require("../images/sam.jpg");

  return (
  <div id="intro">
    <div className='container'> 
      <div className='row'>
        <div className='intro-text'>
          <div id="title">
            <h1>Samira Said</h1>
            <h4>Software Engineer</h4></div>
            <desc>Hello</desc>
        </div>
        <div className='image-container'>
          <div className='about-image'>
          <img className='profile-img' src={image}></img>
        </div>
        </div>
      </div>
    </div>
  </div>
    );
}
export default Intro;
