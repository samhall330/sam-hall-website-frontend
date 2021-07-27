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
        <a href="https://www.instagram.com/samhallllllllll/">
            <img class="social-link-img" src={instagram}></img>
        </a>
        <a href="https://twitter.com/samhallllllllll">
            <img src={twitter}></img>
        </a>
        <a href="https://www.facebook.com/samantha.mann.77398143">
            <img src={facebook}></img>
        </a>
        <a href="">
            <img src={youtube}></img>
        </a>
    </div>
    <form class="email-box" action="mailto:samhallcomedy@gmail.com" method="post" enctype="text/plain">Contact via email (if you're old)<br></br>     
        <input class ="email-button" type="submit" value="Drop me a line!"/>
    </form>
</>

)
}

export default Contact;