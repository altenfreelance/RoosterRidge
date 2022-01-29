import React from 'react';

function Songs() {
    return (
        <div>
            <h1>New Music Coming Soon!</h1>
            <p>We are releasing an album late spring of 2022. Stay up to date with us on <a href="https://www.facebook.com/RoosterRidgeOfficial/"> Facebook </a> for updates and promotions!</p>
            <br/>
            <hr/>
            <h1>2021 Live Recordings</h1>
            {playlist.map((song) => {return (
            <div key={song.title} className="my-2 mx-4 p-4">
                <h4 style={{ color: '' }}>{song.title}</h4>
                <audio controls src={song.url} style={{ width: "100%" }} />
            </div>);
            })}
        </div>
    );
}

const playlist = [
    {
        url: 'audio/RailsTrailsAles2021/Blood in the Soil.mp3',
        title: 'Blood in the Soil (06/05/21)',
    },
    {
        url: 'audio/RailsTrailsAles2021/Crawford County.mp3',
        title: 'Crawford County Critter Line (06/05/21)',
    },
    {
        url: 'audio/RailsTrailsAles2021/Honest Man.mp3',
        title: 'Honest Man (06/05/21)',
    },
    {
        url: 'audio/RailsTrailsAles2021/Mama Don\'t Like.mp3',
        title: 'Mama Don\'t Allow (06/05/21)',
    },
    {
        url: 'audio/RailsTrailsAles2021/Summertime Kid.mp3',
        title: 'Summertime Kid (06/05/21)',
    },
    {
        url: 'audio/RailsTrailsAles2021/Tell it to Me.mp3',
        title: 'Tell it to Me (06/05/21)',
    },
    
]

export default Songs