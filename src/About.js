import React from "react";
import image from "./industry-room.png";

function About(){
return(
    <>
<h1 class="title-header">About me...</h1>
<h3 class="about-me-text">Hey! I'm a New York transplant and Oklahoma native with a knack for observational humor about my life, my upbringing (read, " light beatings") and the proceeding trauma, weird sexual encounters and general body horror that came with the package.</h3>
<a href="https://www.instagram.com/samhallllllllll/">
<img class="about-img" src={image} alt="Sam Hall Performing at the Brooklyn Museum" width="450" height="600"></img>
</a>
</>
)
}

export default About;