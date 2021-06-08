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

function App() {

  return(
    <>
    <Router>
    <NavBar />
    <About />
    </Router>
    </>
  );

}

export default App;