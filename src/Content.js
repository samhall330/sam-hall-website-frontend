import React from "react";
import ReactPlayer from 'react-player'
import mascara from './mascara-screenshot.jpg'

function Content(){
return(
    <>
<h1 class="title-header">Check Out My Content</h1>
<ul class= "tour-date-list">
    <h1>Hot Bits!</h1>
    <img src={mascara} alt="an audio recording of a stand up" width="200" height="100"></img>
    <li><a href="https://www.instagram.com/tv/B-L8ACeA7UT/"> <p>Mascara is Over Sexualized (Writer, Editor)</p> </a></li>
    <h1>Series</h1>
    <li><a href="https://www.instagram.com/tv/CDj43MyAUds/"> <p>Great Interracial Baking Show - Episode 1 "Introductions" (Actor, Producer, Editor)</p> </a></li>
    <li><a href="https://www.instagram.com/tv/CEsK902Dy8A/"> <p>Great Interracial Baking Show - Episode 2 "Buttered Toast" (Producer, Editor)</p> </a></li>
    <li><a href="https://www.instagram.com/tv/CFIhh4CgbBU/"> <p>Great Interracial Baking Show - Episode 3 "Caucasian Cornbread" (Actor, Producer, Editor)</p> </a></li>
    <h1>Short Shorts</h1>
    <li><a href="https://www.instagram.com/tv/CFs0oSOAC_D/"> <p>"Scary Toilet"(Producer, Director, Editor)</p> </a></li>
    <li><a href="https://www.instagram.com/p/CMaGliqA_LY/"> <p>"Mum Fights"(Producer, Actor, Director, Editor)</p> </a></li>
    <h1>Acting!</h1>
    <ReactPlayer url="https://www.instagram.com/tv/B-L8ACeA7UT/" />
    <li><a href="https://www.youtube.com/watch?v=p6YyimoY47Y&ab_channel=HaleynaKociuk-Garza"> <p>"Horror Derves - Episode 1 - What Doesn't Kill You Makes You Stranger" (Actor- "Mom")</p> </a></li>


</ul>
</>
)
}

export default Content;