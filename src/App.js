import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import About from "./About";
import Content from "./Content";
import UpcomingShows from "./UpcomingShows";
import Contact from "./Contact";
import Home from "./Home";

function App() {

  return(
    <>
    <Switch>
    <NavBar />
    <Route exact path="/about">
    <About />
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
    <Route>
    <Home />
    </Route>
    </Switch>
    </>
  );

}

export default App;