import React from "react";

function Contact(){
return(
    <>
<h1 class="title-header">Contact me!</h1>
<div class="container py-5">
    <header class="text-center text-white">
        <h1 class="display-4">Social Links</h1>
        <p class="lead mb-0">Colorful social media links usign FontAwesome.</p>
        <p class="font-italic">Snippet By 
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p>
    </header>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-7 mx-auto text-center">
            <div class="card mb-4 shadow-sm">
                <div class="card-body p-5">

                    <ul class="list-inline text-white">
                        <li class="list-inline-item"><a href="#" class="social-link rounded py-2 px-4 my-2 social-twitter"><i class="fa fa-twitter fa-fw"></i></a></li>
                        <li class="list-inline-item mr-2"><a href="#" class="social-link rounded py-2 px-4 my-2 social-vimeo"><i class="fa fa-vimeo fa-fw"></i></a></li>
                        <li class="list-inline-item mr-2"><a href="#" class="social-link rounded py-2 px-4 my-2 social-youtube"><i class="fa fa-youtube-play fa-fw"></i></a></li>
                    </ul>
                </div>
            </div>

            
            <div class="card mb-4 shadow-sm">
                <div class="card-body p-5">
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a href="" class="social-link social-twitter d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-twitter fa-fw"></i></span><span class="font-weight-bold">Login with Twitter</span></a>
                        </li>
                        <li class="mb-2">
                          <a href="" class="social-link social-medium d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-medium fa-fw"></i></span><span class="font-weight-bold">Login with Medium</span></a>
                        </li>
                        <li class="mb-2">
                        <a href="" class="social-link social-instagram d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-instagram fa-fw"></i></span><span class="font-weight-bold">Login with Instagram</span></a>
                        </li>
                    </ul>
                </div>
            </div>

            
            <div class="card mb-4 shadow-sm">
                <div class="card-body p-5">

                    <ul class="list-unstyled">
                        <li class="mb-2">
                 
                            <a href="" class="social-link social-link-gradient social-facebook d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-facebook-f fa-fw"></i></span><span class="font-weight-bold">Login with Facebook</span></a>
                        </li>
                        
                        <li class="mb-2"><a href="" class="social-link social-link-gradient social-twitter d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1">
          
                            <i class="fa fa-twitter fa-fw"></i></span><span class="font-weight-bold">Login with Twitter</span></a>
                        </li>
                        
                        <li class="mb-2">
             
                            <a href="" class="social-link social-link-gradient social-medium d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-medium fa-fw"></i></span><span class="font-weight-bold">Login with Medium</span></a>
                        </li>
                        
                        <li class="mb-2">
              
                            <a href="" class="social-link social-link-gradient social-instagram d-flex align-items-center py-2 rounded-pill shadow-sm"><span class="icon py-1"><i class="fa fa-instagram fa-fw"></i></span><span class="font-weight-bold">Login with Instagram</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</div>
</>

)
}

export default Contact;