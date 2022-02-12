import "../styles/Intro.css";

function Intro() {
  var image = require("../images/sam1.jpg");

  return (
    <div className="container">
      <div className="row">
        <div className="intro-text">
          <div id="title">
            <h1>Samira Said</h1>
          </div>
          <div id="link">
            <a href="https://www.github.com/samsaid" id="link" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-square"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/smsaid/" id="link" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div>
            <br></br>
            <div id="button-space">
              <form action="https://drive.google.com/file/d/147xxVE86JEuwR_w4fQqCJn5woBsaz0Eq/view?usp=sharing">
                <input id="btn" type="submit" value="Resume as PDF" />
              </form>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img className="profile-img" src={image}></img>
        </div>
      </div>
    </div>
  );
}
export default Intro;
