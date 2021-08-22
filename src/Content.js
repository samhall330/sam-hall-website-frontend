import React from "react";
import mascara from './mascara-screenshot.jpg'
import gibs1 from './gibs-ep1.jpg'
import gibs2 from './gibs-ep2.jpg'
import gibs3 from './gibs-ep3.jpg'
import scary from './scary-toilet.jpg'
import mumfights from './mum-fights.jpg'
import stranger from './killyoustranger.jpg'
import mycontent from './my-content-header.jpg'


function Content(){
return(
    <>
<h1 class="title-header">
    <img src={mycontent} alt="My Content" width="500" height="400"></img>
</h1>

<div class= "content-list">
    <h1>Hot Bits!</h1>
        <a href="https://www.instagram.com/tv/B-L8ACeA7UT/">
            <img class="content-links" src={mascara} alt="audio recording of a stand up bit by Sam Hall" width="600" height="300"></img>
        </a>
        <br></br>
        <h5 className="content-caption">Mascara is Over Sexualized - 2020 (Writer, Editor)</h5>
    <br></br>
    <h1>Series</h1>
        <a href="https://www.instagram.com/tv/CDj43MyAUds/">
            <img class="content-links" src={gibs1} alt="the great interracial baking show episode 1" width="600" height="300"></img>
        </a>
        <br></br>
        <h5 className="content-caption">Great Interracial Baking Show - Episode 1 "Introductions" - 2020 (Actor, Producer, Editor)</h5>
    <br></br>
        <a href="https://www.instagram.com/tv/CEsK902Dy8A/">
            <img class="content-links" src={gibs2} alt="the great interracial baking show episode 2" width="600" height="300"></img>
        </a>
        <br></br>
        <h5 className="content-caption">Great Interracial Baking Show - Episode 2 "Buttered Toast" - 2020 (Producer, Editor)</h5>
    <br></br>
        <a href="https://www.instagram.com/tv/CFIhh4CgbBU/">
            <img class="content-links" src={gibs3} alt="the great interracial baking show episode 3" width="600" height="300"></img>
        </a>
        <br></br>
        <h5 className="content-caption">Great Interracial Baking Show - Episode 3 "Caucasian Cornbread" - 2020 (Actor, Producer, Editor)</h5>
    <br></br>
    <h1>Short Shorts</h1>
        <a href="https://www.instagram.com/p/CFsyxtoAv1j/">
            <img class="content-links" src={scary} alt="a comedy short film called Scary Toilet" width="600" height="300"></img>
        </a>
        <br></br>
        <h5 className="content-caption">"Scary Toilet" - 2020 (Producer, Director, Editor)</h5>
    <br></br>
        <a href="https://www.instagram.com/p/CMaGliqA_LY/">
            <img class="content-links" src={mumfights} alt="a comedy sketch called Mum Fights" width="600" height="300"></img>
        </a>
        <br></br>
        <h5 className="content-caption">"Mum Fights" - 2021 (Producer, Actor, Director, Editor)</h5>
    <br></br>
    <h1>Acting!</h1>
        <a href="https://www.youtube.com/watch?v=p6YyimoY47Y&ab_channel=HaleynaKociuk-Garza">
            <img class="content-links" src={stranger} alt="Horror Derves Episode 1" width="600" height="300"></img>
        </a>
        <br></br>
        <h5 className="content-caption">"Horror Derves - Episode 1 - What Doesn't Kill You Makes You Stranger" - 2021 (Actor- "Mom")</h5>
    <br></br>
</div>

</>
)
}

export default Content;