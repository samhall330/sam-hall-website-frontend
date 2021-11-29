import React from "react";
import samYAS1 from "./samYAS1.jpg"
import samYAS2 from "./samYAS2.jpg"
import barebackShow from "./bareback-show-pic.jpeg"
import barebackShow2 from "./bareback-show-2.png"
import barebackShow3 from "./bareback-show-3.png"
import "./gallery.css"
import gallerytitle from "./gallery-title.PNG"

function Gallery(){
    return(

<>
<h1 className="title-header">
    <img src={gallerytitle} alt="My Content" width="400" height="300"></img>
</h1>
        <section class="carousel">
          <div class="slides">
            <div class="slides-item slide-1" id="slide-1">
                <a href ="https://www.eventbrite.com/e/the-bareback-show-a-stand-up-comedy-extravaganza-lukes-birthday-tickets-189908430227">
                    <img className="gallery-image" src={barebackShow3} alt="sam hall at bareback show october 2021" width="700" height="500"></img>
                </a>
            </div>
            <div class="slides-item slide-2" id="slide-2">
                <a href ="https://www.eventbrite.com/e/the-bareback-show-a-stand-up-comedy-extravaganza-lukes-birthday-tickets-189908430227">
                    <img className="gallery-image" src={barebackShow} alt="sam hall at bareback show october 2021" width="500" height="500"></img>
                </a>
            </div>
            <div class="slides-item slide-3" id="slide-3">
                <a href ="https://www.eventbrite.com/e/the-bareback-show-a-stand-up-comedy-extravaganza-lukes-birthday-tickets-189908430227">
                    <img className="gallery-image" src={barebackShow2} alt="sam hall and destiny dunkle at bareback show october 2021" width="700" height="500"></img>
                </a>
            </div>
            <div class="slides-item slide-4" id="slide-4">
                <img className="gallery-image" src={samYAS1} alt="sam hall at yaaas fest 2021" width="700" height="500"></img>
            </div>
            <div class="slides-item slide-5" id="slide-5">
                <img className="gallery-image" src={samYAS2} alt="sam hall at YAAAS fest 2021" width="700" height="500"></img>    
            </div>       
          </div>
          <div class="carousel__nav">
            <a class="slider-nav" href="#slide-1">1</a>
            <a class="slider-nav" href="#slide-2">2</a>
            <a class="slider-nav" href="#slide-3">3</a>
            <a class="slider-nav" href="#slide-4">4</a>
            <a class="slider-nav" href="#slide-5">5</a>
          </div>
        </section>


        {/* <div className="content-list">
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
        </div> */}
        </>
   
    )}

export default Gallery;