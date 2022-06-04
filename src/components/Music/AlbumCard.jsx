import React, { Component } from "react";

export default class AlbumCard extends Component {
  render() {
    let { name, front_img_url, back_img_url, spotifyLink, appleMusicLink, youtubeLink, bandCampLink, releaseDate, creditsUrl } = this.props;

    return (
      <div className="col-sm-12 p-3">
        <div>
          <div className="container">
            {name && <h1>
              <b>
                {name}
              </b>
            </h1>}
            {creditsUrl && <a href={creditsUrl}> <span role="img" aria-label="">🐔</span> Album Details <span role="img" aria-label="">🐔</span> </a>}

            {releaseDate && <div> {releaseDate} </div>}
            <section>
              <link
                href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
                rel="stylesheet"
              />
              <div className="container">
                <div className="text-center center-block">
                  {bandCampLink && <a href="https://roosterridge.bandcamp.com/releases">
                    <i
                      title={`Rooster Ridge's ${name} on Bandcamp`}
                      id="social-bandcamp"
                      className="fa fa-brands fa-bandcamp social fa-3x">
                    </i>
                  </a>}
                  {spotifyLink && <a href="https://open.spotify.com/artist/7F5waAovJLtcJMpMM4C7yx?si=EhbY9WyNR2CJ5evtQi_4KA">
                    <i
                      title={`Rooster Ridge's ${name} on Spotify`}
                      id="social-spotify"
                      className="fa fa-brands fa-spotify social fa-3x">
                    </i>
                  </a>}
                  {appleMusicLink && <a href="https://music.apple.com/us/artist/rooster-ridge/1618610103">
                    <i
                      title={`Rooster Ridge's ${name} on Apple Music`}
                      id="social-apple"
                      className="fa fa-brands fa-apple social fa-3x">
                    </i>
                  </a>}
                  {youtubeLink && <a href="https://www.youtube.com/channel/UCE0jXwLwL7T6zIoQCnHVUzw">
                    <i
                      title={`Rooster Ridge's ${name} on Youtube`}
                      id="social-yt"
                      className="fa fa-brands fa-youtube fa-3x social"
                    ></i>
                  </a>}

                </div>
              </div>
            </section>


            <div className="row">
              <div className="col-sm-6"> <figure>
                <img
                  src={front_img_url}
                  alt={name}
                  style={{ width: "100%" }}
                  caption=""
                />
              </figure></div>
              <div className="col-sm-6"> <figure>
                <img
                  src={back_img_url}
                  alt={name}
                  style={{ width: "100%" }}
                  caption=""
                />
              </figure></div>

            </div>


          </div>
        </div>
      </div>
    );
  }



}
