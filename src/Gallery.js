import React from "react";
import samYAS1 from "./samYAS1.jpg"
import samYAS2 from "./samYAS2.jpg"
import barebackShow from "./bareback-show-pic.jpeg"
import barebackShow2 from "./bareback-show-2.png"
import barebackShow3 from "./bareback-show-3.png"

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
            <br></br>
            <a href ="https://www.eventbrite.com/e/the-bareback-show-a-stand-up-comedy-extravaganza-lukes-birthday-tickets-189908430227">
            <img className="gallery-image" src={barebackShow} alt="sam hall at bareback show october 2021" width="500" height="500"></img>
            </a>
            <br></br>
            <h5 className="content-caption">Bareback Show - Talon Bar, Bushwick - October 22, 2021</h5>
            <br></br>
            <a href ="https://www.eventbrite.com/e/the-bareback-show-a-stand-up-comedy-extravaganza-lukes-birthday-tickets-189908430227">
            <img className="gallery-image" src={barebackShow2} alt="sam hall and destiny dunkle at bareback show october 2021" width="700" height="500"></img>
            </a>
            <br></br>
            <h5 className="content-caption">Bareback Show w/ <a href= "https://www.instagram.com/denydurkle/">Destiny Dunkle</a> - Talon Bar, Bushwick - October 22, 2021</h5>
            <br></br>
            <a href ="https://www.eventbrite.com/e/the-bareback-show-a-stand-up-comedy-extravaganza-lukes-birthday-tickets-189908430227">
            <img className="gallery-image" src={barebackShow3} alt="sam hall at bareback show october 2021" width="700" height="500"></img>
            </a>
            <br></br>
            <h5 className="content-caption">Bareback Show - Talon Bar, Bushwick - October 22, 2021</h5>
        </div>
    )}

export default Gallery;