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
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a href="https://twitter.com/samhallllllllll" class="social-link social-twitter d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-twitter fa-fw"></i></span><span class="font-weight-bold">Twitter</span></a>
                        </li>
                        <li class="mb-2">
                        <a href="https://www.instagram.com/samhallllllllll/" class="social-link social-instagram d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-instagram fa-fw"></i></span><span class="font-weight-bold">Instagram</span></a>
                        </li>
                    </ul>
                    <form action="mailto:someone@example.com" method="post" enctype="text/plain">
Name:<br></br>
<input type="text" name="name"/><br></br>
E-mail:<br></br>
<input type="text" name="mail"/><br></br>
Comment:<br></br>
<input type="text" name="comment" size="50"/><br></br><br></br>
<input type="submit" value="Send"/>
<input type="reset" value="Reset"/>
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