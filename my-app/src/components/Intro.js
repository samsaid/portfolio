import '../styles/Intro.css'


function Intro() {
  var image = require("../images/sam1.jpg");

  return (
  <div id="intro">
    <div className='container'> 
      <div className='row'>
        <div className='intro-text'>
          <div id="title">
            <h1>Samira Said</h1>
            <h4>Software Engineer</h4></div>
            <div>
            </div>
            <div id='link'>
              <a href="https://www.github.com/samsaid" id="link"><i class="fa fa-github-square"></i></a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/smsaid/" id="link"><i class="fa fa-linkedin"></i></a> 
            </div>
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
