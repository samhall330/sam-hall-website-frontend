import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
return(
<header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container"><Link class="navbar-brand text-uppercase font-weight-bold" to="/home">Sam Hall</Link>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><Link class="navbar-brand text-uppercase font-weight-bold" to="/about">About<span class="sr-only">(current)</span></Link></li>
                    <li class="nav-item"><Link class="navbar-brand text-uppercase font-weight-bold" to="/content">Content</Link></li>
                    <li class="nav-item"><Link class="navbar-brand text-uppercase font-weight-bold" to="/upcoming-shows">Upcoming Shows</Link></li>
                    <li class="nav-item"><Link class="navbar-brand text-uppercase font-weight-bold" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
)
}

export default NavBar;