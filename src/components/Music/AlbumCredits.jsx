import React from 'react';
import { Icon } from '@iconify/react';


export default function AlbumCredits({ title, abouts, songs, AlbumCardComp }) {

    return (

        <div>
            <h1>{title}</h1>
            {AlbumCardComp}
            <div>
                <a
                    href="https://open.spotify.com/album/insertidhere"
                    className="btn btn-light btn-sm m-1">
                    <Icon icon="mdi:spotify" />
                </a>

                <a
                    href="https://music.apple.com/us/album/inserthere"
                    className="btn btn-light btn-sm m-1">
                    <Icon
                        icon="cib:apple-music"
                    />
                </a>
                <a
                    href="https://roosterridge.bandcamp.com"
                    className="btn btn-light btn-sm m-1">
                    Band Camp
                </a>

            </div>

            <div>
                {abouts.map((item, i) => {
                    return <div key={`about-${i}`}>{item}</div>
                })}
            </div>
            <hr />
            {songs.map((song, i) => {
                return (<div key={`songs-${i}`}>
                    <h4 className="">{song.title}</h4>
                    <div>
                        {song.instrumentation.map((item, j) => {
                            return <div key={`song${i}-instr-${j}`} >{item}</div>
                        })}
                    </div>
                    <hr />
                </div>)
            })}
        </div>
    )
}