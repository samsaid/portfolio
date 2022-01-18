import '../styles/Nav.css'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function Nav(){
    return(
        
        <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news">Projects</a>
        <a href="#contact">Education</a>
        <a href="#about">Experience</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    );
}

export default Nav;