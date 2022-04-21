import React from 'react';
import AlbumCard from '../../AlbumCard';


export default function ChickenScratchAlbumCard(props) {

    return (
        <AlbumCard front_img_url="/images/albums/chicken-scratch/CoverFront.jpg"
            back_img_url="/images/albums/chicken-scratch/CoverBack.jpg" {...props} />)
}