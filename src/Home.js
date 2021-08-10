import React from "react";
import YouTube from 'react-youtube';
import ReactPlayer from "react-player";
import samhall from "./sam-hall.jpg"

function Home(){
return(
    <>
<h1 class="title-header">
<img className="samhall-header" src={samhall} alt="About Me" width="400" height="300"></img>
</h1>

<h3 class="broadway-tape-header">Broadway Comedy Club - July 10th, 2021</h3>
      <ReactPlayer class="broadway-tape"url="https://youtu.be/Jo-AXTqQAME"/>
</>
)
}

export default Home;