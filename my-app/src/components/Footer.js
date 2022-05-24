import '../styles/Footer.css'
  
function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return(
        <footer id='footer'>
           <p> last updated on: 05/24/22 </p> 
        </footer>
    );
}

export default Footer;