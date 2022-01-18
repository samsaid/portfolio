import '../styles/Footer.css'

var text = ["© 2022 Samira Said ฅ^•ﻌ•^ฅ", "© 2022 Samira Said ฅ^•ﻌ•^ฅ*.ﾟ"]
var counter = 0;
var elem = document.getElementById("footer");
var inst = setInterval(change, 1000);
function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
      // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
  }
  
function Footer(){
    return(
        <footer id='footer'>
           <p>© 2022 Samira Said ฅ^•ﻌ•^ฅ</p> 
        </footer>
    );
}

export default Footer;