import React from "react";
import YouTube from 'react-youtube';
import ReactPlayer from "react-player";

function Home(){
return(
    <>
<h1 class="title-header">Sam Hall - Stand Up Comic</h1>

<h3 class="broadway-tape-header">Broadway Comedy Club - July 10th, 2021</h3>
      <ReactPlayer class="broadway-tape"url="https://youtu.be/Jo-AXTqQAME"/>
</>
)
}

export default Home;