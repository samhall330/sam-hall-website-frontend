import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

function NavBar(){
return(
<div className="navbar">
<header className="header">
    <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container"><Link className="navbar-brand text-uppercase font-weight-bold" to="/home">Sam Hall</Link>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
            
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link className="navbar-brand text-uppercase font-weight-bold" to="/about">About<span className="sr-only">(current)</span></Link></li>
                    <li className="nav-item"><Link className="navbar-brand text-uppercase font-weight-bold" to="/gallery">Gallery</Link></li>
                    <li className="nav-item"><Link className="navbar-brand text-uppercase font-weight-bold" to="/content">Content</Link></li>
                    <li className="nav-item"><Link className="navbar-brand text-uppercase font-weight-bold" to="/upcoming-shows">Upcoming Shows</Link></li>
                    <li className="nav-item"><Link className="navbar-brand text-uppercase font-weight-bold" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</div>
)
}

export default NavBar;