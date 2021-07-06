import React from "react";

function Contact(){
return(
    <>
<h1 class="title-header">Contact me!</h1>

<div class="container">
    <div class="row">
        <div class="col-lg-7 mx-auto text-center">
            
            
            
            <div class="card mb-4 shadow-sm">
                <div class="card-body p-5">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <ul class="list-unstyled">

                        <li class="mb-2">
                            <a href="https://twitter.com/samhallllllllll" class="fa fa-twitter"><span class="icon py-1"></span><span class="font-weight-bold"></span></a>
                        </li>
                        <li class="mb-2">
                        <a href="https://www.instagram.com/samhallllllllll/" class="fa fa-instagram"><span class="icon py-1"></span><span class="font-weight-bold"></span></a>
                        </li>
                    </ul>
                    <form  class="email-box" action="mailto:samhallcomedy@gmail.com" method="post" enctype="text/plain">Contact via email (if you're old)<br></br>     
                        <input class ="email-button" type="submit" value="Drop me a line!"/>
                    </form>
                </div>
            </div>

            
            
        </div>
    </div>
</div>
</>

)
}

export default Contact;