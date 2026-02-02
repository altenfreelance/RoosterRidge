import React from 'react';
import { Helmet } from "react-helmet";
import AlbumCard from './AlbumCard';

function Music() {
    return (
        <div className="container">
            <Helmet>
                <title>RR - Music</title>
            </Helmet>

            <h1>Music</h1>

            <div className="row">
                {albumCards.map((album) => <div key={album.props.name}>{album}</div>)}
            </div>
        </div>
    );
}

export const LiveAtCappysAlbumCard = () => <AlbumCard
    front_img_url="/images/albums/live-at-cappys/Cover.jpg"
    back_img_url="/images/albums/live-at-cappys/Cover.jpg"
    name="Bootleg: Live at Cappy's"
    releaseDate="11/14/2025"
    spotifyLink="https://open.spotify.com/album/5yVRk4Fsz2AdLXlAf7997B?si=4iKvq89KSR6mSFke7G0o_A"
    appleMusicLink="https://music.apple.com/us/album/bootleg-live-at-cappys/1853111096"
    youtubeLink="https://www.youtube.com/watch?v=ev8kxIG-uE4&list=OLAK5uy_lWh2neiBaZFF0UeQaDf4bSTgLIX-3eugQ"
/>

export const ChickenScratchAlbumCard = (showCreditsUrl = true) => <AlbumCard front_img_url="/images/albums/chicken-scratch/CoverFront.jpg"
    back_img_url="/images/albums/chicken-scratch/CoverBack.jpg"
    name="Chicken Scratch"
    releaseDate="6/4/2022"
    creditsUrl={showCreditsUrl && "/music/chicken-scratch"}
    spotifyLink="https://open.spotify.com/album/6JXo769YU2FBHZfmUhaghd?si=GxZ0DaGXQ6idkM-DSMn_gQ"
    appleMusicLink="https://music.apple.com/us/album/chicken-scratch/1618614515"
    youtubeLink="https://youtube.com/playlist?list=OLAK5uy_kdB0FZiK4cxmQ7QSsRFEAbo0DL9S3i3K0"
    bandCampLink="https://roosterridge.bandcamp.com/album/chicken-scratch"
/>

const albumCards = [
    LiveAtCappysAlbumCard(),
    ChickenScratchAlbumCard()
]


export default Music