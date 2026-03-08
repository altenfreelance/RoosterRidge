import React, { useState, useEffect } from "react";
import "./index.css";
import Footer from "./pages/Footer/Footer";
import NavHeader from "./pages/Nav/NavHeader";
import GalleryPage from "./pages/Gallery/GalleryPage";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/Contact";
import Music from "./pages/Music/Music";
import Bio from "./pages/Home/Bio";
import Members from "./pages/Members/Members";
import ChickenScratchCredits from "./pages/Music/Albums/ChickenScratch/ChickenScratchCredits";

import {
  Route,
  Navigate,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const logoImg = "/images/RR.jpg";

  const [easterEggCounter, setEasterEggCounter] = useState(0);

  useEffect(() => {
    if (easterEggCounter > 0 && easterEggCounter % 10 === 0) {
      window.location = "/admin";
    }
  }, [easterEggCounter]);

  return (
    <div className="site-wrapper">
      <div className="site-content">
        <Router>
          <NavHeader />
          <button
            className="logo-button"
            onClick={() => setEasterEggCounter(easterEggCounter + 1)}
          >
            <img
              className="logo-circle"
              alt="Rooster Ridge"
              src={logoImg}
            />
          </button>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/shows" replace />} />
              <Route path="/about" element={<Bio />} />
              <Route path="/shows" element={<Events />} />
              <Route path="/members" element={<Members />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/music" element={<Music />} />
              <Route path="/music/chicken-scratch" element={<ChickenScratchCredits />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/qr" element={<Navigate to="/contact" replace />} />
              <Route path="*" element={<Navigate to="/shows" replace />} />
            </Routes>
          </main>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
