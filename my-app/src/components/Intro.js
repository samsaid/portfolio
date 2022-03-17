import "../styles/Intro.css";

function Intro() {
  var image = require("../images/sam1.jpg");

  return (
    <div className="intro-container">
      <div className="row">
        <div className="intro-text">
          <div id="title">
            <h1>Samira Said</h1>
            <div id="link">
              <a
                href="https://www.github.com/samsaid"
                className="link float-on-hover"
                target="_blank"
                rel="noopener noreferrer"
                alt="Github profile"
              >
                <i className="fa fa-github-square"></i>
              </a>
              &nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/in/smsaid/"
                className="link float-on-hover"
                target="_blank"
                rel="noopener noreferrer"
                alt="Linkedin profile"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              &nbsp;&nbsp;
              <a
                href="https://drive.google.com/file/d/147xxVE86JEuwR_w4fQqCJn5woBsaz0Eq/view"
                className="link float-on-hover"
                target="_blank"
                rel="noopener noreferrer"
                alt="Resume on Google drive"
              >
                <i className="fa fa-file-pdf-o"></i>
              </a>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="about-image">
          <img className="profile-img" src={image} alt="Girl sitting"></img>
        </div>
      </div>
    </div>
  );
}
export default Intro;
