import '../styles/Footer.css'
  
function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    return(
        <footer id='footer'>
           <p>  ✿ {year} samira said ✿ </p> 
        </footer>
    );
}

export default Footer;