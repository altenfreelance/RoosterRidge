import React from 'react';

export default function AlbumCredits({ title, abouts, songs, AlbumCardComp }) {
  return (
    <div>
      {AlbumCardComp}
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
        <div style={{ marginBottom: "1rem" }}>
          {abouts.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
        <hr style={{ borderColor: "rgba(255,179,128,0.2)" }} />
        {songs.map((song, i) => (
          <div key={i} style={{ marginBottom: "0.5rem" }}>
            <h4>{song.title}</h4>
            <div>
              {song.instrumentation.map((item, j) => (
                <div key={j}>{item}</div>
              ))}
            </div>
            <hr style={{ borderColor: "rgba(255,179,128,0.2)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
