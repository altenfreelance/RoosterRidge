import React, { Component } from "react";
import "./social-icons.css";


export default class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto"
        style={{
          backgroundColor: 'rgba(128,0,0, 0.8)',
          position: 'absolute',
          bottom: '0',
          left: '0',
          hieght: '2.5rem',
          right: '0'
        }}>
        <section>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            rel="stylesheet"
          />
          <div className="container">
            <div className="text-center center-block">
              <a href="https://open.spotify.com/artist/7F5waAovJLtcJMpMM4C7yx?si=EhbY9WyNR2CJ5evtQi_4KA">
                <i
                  title="Rooster Ridge on Spotify"
                  id="social-spotify"
                  className="fa fa-brands fa-spotify social fa-3x">
                </i>
              </a>
              <a href="https://music.apple.com/us/artist/rooster-ridge/1618610103">
                <i
                  title="Rooster Ridge on Apple Music"
                  id="social-apple"
                  className="fa fa-brands fa-apple social fa-3x">
                </i>
              </a>
              <a href="https://roosterridge.bandcamp.com/releases">
                <i
                  title="Rooster Ridge on Bandcamp"
                  id="social-bandcamp"
                  className="fa fa-brands fa-bandcamp social fa-3x">
                </i>
              </a>
              <a href="https://www.youtube.com/channel/UCE0jXwLwL7T6zIoQCnHVUzw">
                <i
                  title="Rooster Ridge on Youtube"
                  id="social-yt"
                  className="fa fa-brands fa-youtube fa-3x social"
                ></i>
              </a>
              <a href="https://www.facebook.com/RoosterRidgeOfficial/">
                <i
                  title="Rooster Ridge on Facebook"
                  id="social-fb"
                  className="fa fa-brands fa-facebook fa-3x social"
                ></i>
              </a>
              <a href="https://www.instagram.com/roosterridgeofficial/">
                <i id="social-ig" className="fa fa-brands fa-instagram fa-3x social"></i>
              </a>
              <a href="mailto:roosterridgeofficial@gmail.com">
                <i
                  title="Email Rooster Ridge"
                  id="social-em"
                  className="fa fa-envelope-square fa-3x social"
                ></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
