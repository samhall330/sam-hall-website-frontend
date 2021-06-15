import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import About from "./About";
import Content from "./Content";
import UpcomingShows from "./UpcomingShows";
import Contact from "./Contact";
import Home from "./Home";
import Header from "./Header";

function App() {

  return(
    <>
    <NavBar />
    <Header />
    <Switch>
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
    <Route exact path = "/home">
    <Home />
    </Route>
    </Switch>
    </>
  );

}

export default App;