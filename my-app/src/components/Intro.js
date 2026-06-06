import "../styles/Intro.css";

function Intro() {
  // var image = require("../images/sam3.jpg");

  return (
    <div className="intro-container">
      <div className="row">
        <div className="intro-text">
          <div className="about-image">
            {/* <img className="profile-img" src={image} alt="samira"></img> */}
          </div>
          <div id="title">
            <h1>samira said</h1>
            {/* <p>creating and building</p> */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
