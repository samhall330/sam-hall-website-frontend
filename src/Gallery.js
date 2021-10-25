import React from "react";
import samYAS1 from "./samYAS1.jpg"
import samYAS2 from "./samYAS2.jpg"

function Gallery(){
    return(
        <div className="content-list">
            <a href ="https://www.queercomedyfestival.com/">
            <img className="gallery-image" src={samYAS2} alt="sam hall at YAAAS fest 2021" width="700" height="500"></img>
            </a>
            <br></br>
            <h5 className="content-caption">YAAAS! Fest 2021 - Queer Comedy Festival @ Broadway Comedy Club, NYC - September 30, 2021</h5>
            <br></br>
            <a href ="https://www.queercomedyfestival.com/">
            <img className="gallery-image" src={samYAS1} alt="sam hall at yaaas fest 2021" width="700" height="500"></img>
            </a>
            <br></br>
            <h5 className="content-caption">YAAAS! Fest 2021 - Queer Comedy Festival @ Broadway Comedy Club, NYC - September 30, 2021</h5>
        </div>
    )}

export default Gallery;