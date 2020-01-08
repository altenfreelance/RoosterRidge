import React from 'react';
const playerStyle = { backgroundColor: 'rgba(128,0,0, 0.8)', borderRadius: '30px' }

function Songs() {
    return (
        <div>
            <h1>Audio</h1>
            {playlist.map((song) => {return (
            <div key={song.title} className="my-2 mx-4 p-4" style={playerStyle}>
                <h4 style={{ color: '' }}>{song.title}</h4>
                <audio controls src={song.url} style={{ width: "100%" }} />
            </div>);
            })}
        </div>
    );
}

const playlist = [
    {
        url: 'audio/BloodInTheSoil.mp3',
        title: 'Blood In the Soil (12/20/31)',
    },
    {
        url: 'audio/FoolsGold.mp3',
        title: 'Fools Gold (12/31/19)',
    },
    {
        url: 'audio/CCCL.mp3',
        title: 'Crawford County Critter Line (12/31/19)',
    },
    {
        url: 'audio/AtlanticCity.mp3',
        title: 'Atlantic City (12/31/19)',
    },
    {
        url: 'audio/CocaineHabit.mp3',
        title: 'Cocaine Habit (12/31/19)',
    }
    // ,
    // {
    //     url: 'audio/BloodInTheSoil.mp3',
    //     title: '2 In the Soil',
    // }
]

export default Songs