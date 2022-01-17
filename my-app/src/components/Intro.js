import '../styles/Intro.css'

function Intro() {
  var image = require("../images/sam1.jpg");

  return (
  
    <div className='container'> 
      <div className='row'>
      
        <div className='intro-text'>
        <div className='about-image'>
          <img className='profile-img' src={image}></img>
        </div>
          <div id="title">
            <h1>Samira Said</h1>
            </div>     
            <div id='link'>
              <a href="https://www.github.com/samsaid" id="link"> <i class="fa fa-github-square"></i></a> 
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/smsaid/" id="link"><i class="fa fa-linkedin"></i></a> 
              &nbsp;&nbsp;
              <a href="https://drive.google.com/file/d/1a9TCdv7qMr0-S3X6FC7F4uOKlP8gSJng/view?usp=sharing" id="link"><i class="fa fa-paperclip"></i></a> 
            </div>
            
        </div>
        
        </div>    
    </div>
  
    );
}
export default Intro;
