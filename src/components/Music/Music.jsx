import React from 'react';
import { Helmet } from "react-helmet";
import ChickenScratchAlbumCard from './Albums/ChickenScratch/ChickenScratchAlbumCard';

function Music() {
    return (
        <div className="container">
            <Helmet>
                <title>RR - Music</title>
            </Helmet>

            <h1>Music</h1>

            <div className="row">
                {albumCards.map((album) => (<a key={album.props.name} href={album.props.creditsUrl} style={{ color: "white" }} >
                    {album}
                </a>)

                )}
                {albumCards.length === 0 && <p className="container-fluid" style={{ color: "white", margin: "auto" }}>We don't have any public shows on the books for now. Please see our <a href="/contact">contact</a> page if you are interested in booking Rooster Ridge.</p>}
            </div>

        </div>
    );
}

const albumCards = [
    <ChickenScratchAlbumCard name="Chicken Scratch" creditsUrl="/music/chicken-scratch" />
]

export default Music