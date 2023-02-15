import '../styles/Footer.css'
  
function Footer(){
    var date = new Date();
    var year = date.getFullYear();
    
    return(
        <footer id='footer'>
           <p>  {year} Samira Said <b>₍⸍⸌̣ʷ̣̫⸍̣⸌₎</b> made on <a href="https://github.com/samsaid/portfolio" target="_blank" rel="noopener noreferrer">github</a></p> 
        </footer>
    );
}

export default Footer;