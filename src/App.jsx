import React from "react";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Members from "./components/Members/Members";
import NavHeader from "./components/Nav/NavHeader";

import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Events from "./components/Events/Events";
// import VidContainer from './VidContainer';
import Contact from "./components/Contact/Contact";
import Music from "./components/Music/Music";
import Bio from "./components/Home/Bio";
import ChickenScratchCredits from "./components/Music/Albums/ChickenScratch/ChickenScratchCredits";

function App() {
  const logo_img = '/images/RR.jpg';
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh'
      }}>
      <div
        style={{
          paddingBottom: '4rem',
        }}
        className="cover-container text-center d-flex w-100 h-100 mx-auto flex-column">
        <Router>
          <NavHeader />
          <img
            className="logo-circle"
            alt="Rooster Ridge"
            src={logo_img}
          />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              {/* <VidContainer /> */}
              <Bio />
            </Route>
            <Route exact path="/shows">
              <Events />
            </Route>
            <Route exact path="/members">
              <Members />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Music">
              <Music />
            </Route>
            <Route exact path="/music/chicken-scratch">
              <ChickenScratchCredits />
            </Route>
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
