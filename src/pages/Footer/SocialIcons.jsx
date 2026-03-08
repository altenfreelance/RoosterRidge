import React from 'react';
import "./social-icons.css";

export default function SocialIcons() {
  return (
    <div className="social-icons-row">
      <a href="https://open.spotify.com/artist/7F5waAovJLtcJMpMM4C7yx?si=EhbY9WyNR2CJ5evtQi_4KA" aria-label="Spotify">
        <i title="Rooster Ridge on Spotify" id="social-spotify" className="fa-brands fa-spotify social fa-2x"></i>
      </a>
      <a href="https://music.apple.com/us/artist/rooster-ridge/1618610103" aria-label="Apple Music">
        <i title="Rooster Ridge on Apple Music" id="social-apple" className="fa-brands fa-apple social fa-2x"></i>
      </a>
      <a href="https://roosterridge.bandcamp.com/releases" aria-label="Bandcamp">
        <i title="Rooster Ridge on Bandcamp" id="social-bandcamp" className="fa-brands fa-bandcamp social fa-2x"></i>
      </a>
      <a href="https://www.youtube.com/channel/UCE0jXwLwL7T6zIoQCnHVUzw" aria-label="YouTube">
        <i title="Rooster Ridge on YouTube" id="social-yt" className="fa-brands fa-youtube social fa-2x"></i>
      </a>
      <a href="https://www.facebook.com/RoosterRidgeOfficial/" aria-label="Facebook">
        <i title="Rooster Ridge on Facebook" id="social-fb" className="fa-brands fa-facebook social fa-2x"></i>
      </a>
      <a href="https://www.instagram.com/roosterridgeofficial/" aria-label="Instagram">
        <i title="Rooster Ridge on Instagram" id="social-ig" className="fa-brands fa-instagram social fa-2x"></i>
      </a>
      <a href="mailto:roosterridgeofficial@gmail.com" aria-label="Email">
        <i title="Email Rooster Ridge" id="social-em" className="fa-solid fa-envelope social fa-2x"></i>
      </a>
    </div>
  );
}
