import React from "react";
import "./index.css";
import Footer from "./pages/Footer/Footer";
import Members from "./pages/Members/Members";
import NavHeader from "./pages/Nav/NavHeader";
import GalleryPage from "./pages/Gallery/GalleryPage";
import { useEffect, useState } from "react";

import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/Contact";
import Music from "./pages/Music/Music";
import Bio from "./pages/Home/Bio";
import ChickenScratchCredits from "./pages/Music/Albums/ChickenScratch/ChickenScratchCredits";
import RRImage from "./components/RRImage";

function App() {
  const logo_img = '/images/RR.jpg';

  const [easterEggCounter, settEasterEggCounter] = useState(0);
  // Launch CMS
  useEffect(() => {
    if (easterEggCounter > 0 && easterEggCounter % 10 == 0) {
      window.location = "/admin"
    }

  }, [easterEggCounter])

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
          <button style={{ display: "contents" }} onClick={() => {
            settEasterEggCounter(easterEggCounter + 1)
          }}>
            <RRImage
              className="logo-circle"
              alt="Rooster Ridge"
              src={logo_img}
            />
          </button>

          <Switch>
            <Route exact path="/">
              <Redirect to="/shows" />
            </Route>
            <Route exact path="/about">
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
            <Route exact path="/gallery">
              <GalleryPage />
            </Route>
            {/* QR code on business card*/}
            <Route path="/qr">
              <Redirect to="/contact" />
            </Route>
            <Route path="*">
              <Redirect to="/shows" />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
