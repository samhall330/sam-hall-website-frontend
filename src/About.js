import React from "react";
import image from "./industry-room.png";
import aboutme from "./about-me-header.jpg"

function About(){
return(
<>
    <h1 className="title-header">
        <img className="about-me-header" src={aboutme} alt="About Me" width="400" height="300"></img>
    </h1>
    <div className="about-container">
        <h3 className="about-me-text">Hey! I'm a New York transplant and Oklahoma native with a knack for observational humor about my life, my upbringing (read, " light beatings") and the proceeding trauma, weird sexual encounters and general body horror that came with the package.</h3>
            <a href="https://www.instagram.com/samhallllllllll/">
                <img className="about-img" src={image} alt="Sam Hall Performing at the Brooklyn Museum" width="450" height="600"></img>
            </a>
    </div>
</>
)
}

export default About;