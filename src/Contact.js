import React from "react";
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import twitter from "./twitter.png"
import youtube from "./youtube.png"
import contactheader from "./contact-header.jpg"

function Contact(){
return(
    <>
<h1 className="contact-header">
    <img src= {contactheader} alt="Slide Into My DMs!" width="500" height="300"></img>
</h1>
    <div className="contact-container">
    <div class="social-links">
        <a href="https://www.instagram.com/samhallllllllll/">
            <img class="social-link-img" alt ="instagram logo" src={instagram}></img>
        </a>
        <a href="https://twitter.com/samhallllllllll">
            <img class="social-link-img"  alt ="twitter logo"  src={twitter}></img>
        </a>
        <a href="https://www.facebook.com/samantha.mann.77398143">
            <img class="social-link-img" alt ="facebook logo"  src={facebook}></img>
        </a>
        <a href="https://www.instagram.com/samhallllllllll/">
            <img class="social-link-img" alt ="youtube logo"  src={youtube}></img>
        </a>
    </div>
    <form class="email-box" action="mailto:samhallcomedy@gmail.com" method="post" enctype="text/plain">If you're old, shoot me an email<br></br>     
        <input class ="email-button" type="submit" value="I'm old"/>
    </form>
    <br></br>
    </div>
</>

)
}

export default Contact;