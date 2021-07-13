import React from "react";
import ReactPlayer from 'react-player'
import mascara from './mascara-screenshot.jpg'
import gibs1 from './gibs-ep1.jpg'
import gibs2 from './gibs-ep2.jpg'
import gibs3 from './gibs-ep3.jpg'
import scary from './scary-toilet.jpg'
import mumfights from './mum-fights.jpg'
import stranger from './killyoustranger.jpg'


function Content(){
return(
    <>
<h1 class="title-header">Check Out My Content</h1>
<ul class= "tour-date-list">
    <h1>Hot Bits!</h1>
    <img src={mascara} alt="audio recording of a stand up bit by Sam Hall" width="400" height="200"></img>
    <li><a href="https://www.instagram.com/tv/B-L8ACeA7UT/"> <p>Mascara is Over Sexualized (Writer, Editor)</p> </a></li>
    <h1>Series</h1>
    <img src={gibs1} alt="the great interracial baking show episode 1" width="400" height="200"></img>
    <li><a href="https://www.instagram.com/tv/CDj43MyAUds/"> <p>Great Interracial Baking Show - Episode 1 "Introductions" (Actor, Producer, Editor)</p> </a></li>
    <img src={gibs2} alt="the great interracial baking show episode 2" width="400" height="200"></img>
    <li><a href="https://www.instagram.com/tv/CEsK902Dy8A/"> <p>Great Interracial Baking Show - Episode 2 "Buttered Toast" (Producer, Editor)</p> </a></li>
    <img src={gibs3} alt="the great interracial baking show episode 3" width="400" height="200"></img>
    <li><a href="https://www.instagram.com/tv/CFIhh4CgbBU/"> <p>Great Interracial Baking Show - Episode 3 "Caucasian Cornbread" (Actor, Producer, Editor)</p> </a></li>
    <h1>Short Shorts</h1>
    <img src={scary} alt="a comedy short film called Scary Toilet" width="400" height="200"></img>
    <li><a href="https://www.instagram.com/tv/CFs0oSOAC_D/"> <p>"Scary Toilet"(Producer, Director, Editor)</p> </a></li>
    <img src={mumfights} alt="a comedy sketch called Mum Fights" width="400" height="200"></img>
    <li><a href="https://www.instagram.com/p/CMaGliqA_LY/"> <p>"Mum Fights"(Producer, Actor, Director, Editor)</p> </a></li>
    <h1>Acting!</h1>
    {/* <ReactPlayer url="https://www.instagram.com/tv/B-L8ACeA7UT/" /> */}
    <img src={stranger} alt="Horror Derves Episode 1" width="400" height="200"></img>
    <li><a href="https://www.youtube.com/watch?v=p6YyimoY47Y&ab_channel=HaleynaKociuk-Garza"> <p>"Horror Derves - Episode 1 - What Doesn't Kill You Makes You Stranger" (Actor- "Mom")</p> </a></li>


</ul>
</>
)
}

export default Content;