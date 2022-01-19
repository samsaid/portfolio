import '../styles/Intro.css'

function Intro() {
  var image = require("../images/sam1.jpg");

  return (
  
    <div className='container'> 
      <div className='row'>
      
        <div className='intro-text'>
        
          <div id="title">
            <h1>Samira Said</h1>
            </div>     
            <div id='link'>
              <a href="https://www.github.com/samsaid" id="link"> <i class="fa fa-github-square"></i></a> 
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/smsaid/" id="link"><i class="fa fa-linkedin"></i></a> 
            </div>
          <div>
             <br></br>
            <form action="https://google.com">
            <input id="btn" type="submit" value="Resume as PDF" />
            </form>
            </div>
        </div>
        <div className='about-image'>
          <img className='profile-img' src={image}></img>
        </div>
        
        </div>    
    </div>
  
    );
}
export default Intro;
