import React from "react";

export default function AlbumCard({
  name,
  front_img_url,
  back_img_url,
  spotifyLink,
  appleMusicLink,
  youtubeLink,
  bandCampLink,
  releaseDate,
  creditsUrl,
}) {
  return (
    <div className="col-sm-12 p-3">
      <div className="container">
        {name && <h2><b>{name}</b></h2>}
        {creditsUrl && (
          <a href={creditsUrl}>Album Details</a>
        )}
        {releaseDate && <div style={{ marginTop: "0.25rem", opacity: 0.8 }}>{releaseDate}</div>}

        <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", margin: "1rem 0" }}>
          {spotifyLink && (
            <a href={spotifyLink} aria-label={`${name} on Spotify`}>
              <i title={`${name} on Spotify`} className="fa-brands fa-spotify social fa-2x"></i>
            </a>
          )}
          {appleMusicLink && (
            <a href={appleMusicLink} aria-label={`${name} on Apple Music`}>
              <i title={`${name} on Apple Music`} className="fa-brands fa-apple social fa-2x"></i>
            </a>
          )}
          {youtubeLink && (
            <a href={youtubeLink} aria-label={`${name} on YouTube`}>
              <i title={`${name} on YouTube`} className="fa-brands fa-youtube social fa-2x"></i>
            </a>
          )}
          {bandCampLink && (
            <a href={bandCampLink} aria-label={`${name} on Bandcamp`}>
              <i title={`${name} on Bandcamp`} className="fa-brands fa-bandcamp social fa-2x"></i>
            </a>
          )}
        </div>

        <div className="row justify-content-center">
          {front_img_url === back_img_url ? (
            <div className="col-sm-8 col-md-6">
              <figure>
                <img src={front_img_url} alt={name} style={{ width: "100%", borderRadius: "8px" }} loading="lazy" />
              </figure>
            </div>
          ) : (
            <>
              <div className="col-sm-6">
                <figure>
                  <img src={front_img_url} alt={`${name} front cover`} style={{ width: "100%", borderRadius: "8px" }} loading="lazy" />
                </figure>
              </div>
              <div className="col-sm-6">
                <figure>
                  <img src={back_img_url} alt={`${name} back cover`} style={{ width: "100%", borderRadius: "8px" }} loading="lazy" />
                </figure>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
