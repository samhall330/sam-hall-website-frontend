import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import About from "./About";
import Gallery from "./Gallery";
import Content from "./Content";
import UpcomingShows from "./UpcomingShows";
import Contact from "./Contact";
import Home from "./Home";
import Header from "./Header";

function App() {

  return(
    
<div className="main-div">
    <NavBar />
    <Header />
    <Switch>
    <Route exact path="/about">
    <About />
    </Route>
    <Route exact path="/gallery">
    <Gallery />
    </Route>
    <Route exact path="/content">
    <Content />
    </Route>
    <Route exact path="/upcoming-shows">
    <UpcomingShows />
    </Route>
    <Route exact path = "/contact">
    <Contact />
    </Route>
    <Route exact path = "/home">
    <Home />
    </Route>
    <Route exact path = "/">
    <Home />
    </Route>
    </Switch>
    </div>
    
  );

}

export default App;