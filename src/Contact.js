import React from "react";
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import twitter from "./twitter.png"
import youtube from "./youtube.png"

function Contact(){
return(
    <>
<h1 class="title-header">Contact me!</h1>
    <div class="social-links">
        <img src={instagram}></img>
        <img src={twitter}></img>
        <img src={facebook}></img>
        <img src={youtube}></img>
    </div>
    <form class="email-box" action="mailto:samhallcomedy@gmail.com" method="post" enctype="text/plain">Contact via email (if you're old)<br></br>     
        <input class ="email-button" type="submit" value="Drop me a line!"/>
    </form>
</>

)
}

export default Contact;