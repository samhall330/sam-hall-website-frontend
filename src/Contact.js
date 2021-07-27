import React from "react";

function Contact(){
return(
    <>
<h1 class="title-header">Contact me!</h1>
    <form class="email-box" action="mailto:samhallcomedy@gmail.com" method="post" enctype="text/plain">Contact via email (if you're old)<br></br>     
        <input class ="email-button" type="submit" value="Drop me a line!"/>
    </form>
</>

)
}

export default Contact;