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

function App() {

  return(
    <>
    <Switch>
    <NavBar />
    <Route exact path="/about">
    <About />
    </Route>
    <Content />
    <UpcomingShows />
    <Contact />
    </Switch>
    </>
  );

}

export default App;