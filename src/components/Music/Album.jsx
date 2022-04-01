import React from 'react';
import { Icon } from '@iconify/react';


export default function Album({ title, abouts, songs }) {

    return (

        <div>
            <h1>{title}</h1>
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
                {abouts.map((item) => {
                    return <div>{item}</div>
                })}
            </div>
            <hr />
            {songs.map((song, i) => {
                return (<div>
                    <h4 className="">{song.title}</h4>
                    <div>
                        {song.instrumentation.map((item) => {
                            return <div>{item}</div>
                        })}
                    </div>
                    <hr />
                </div>)
            })}
        </div>
    )
}