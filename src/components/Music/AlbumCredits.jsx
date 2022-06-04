import React from 'react';

export default function AlbumCredits({ title, abouts, songs, AlbumCardComp }) {

    return (

        <div>
            {AlbumCardComp}
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