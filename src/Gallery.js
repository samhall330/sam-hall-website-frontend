import React from "react";
import samYAS1 from "./samYAS1.jpg"

function Gallery(){
    return(
        <div className="content-list">
            <img className="gallery-image" src={samYAS1} alt="audio recording of a stand up bit by Sam Hall" width="500" height="350"></img>
            <br></br>
            <h5 className="content-caption">YAAAS! Fest 2021 - Queer Comedy Festival @ Broadway Comedy Club, NYC </h5>
        </div>
    )}

export default Gallery;