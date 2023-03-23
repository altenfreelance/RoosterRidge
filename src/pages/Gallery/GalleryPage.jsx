import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import PhotoGallery from './PhotoGallery';
import data from "./parsed-gallery.json"
import SocialIcons from '../Footer/SocialIcons';

export default function MediaKit() {

    useEffect(() => {
        console.log("data", data)
    }, [])
    return (
        <div>
            <Helmet>
                <title>RR - Gallery</title>
            </Helmet>
            <h1>Gallery</h1>
            <p>
                <a href="/contact">
                    Contact Rooster Ridge
                </a>
            </p>
            <p>
                <a href="/music">
                    Music
                </a>
            </p>
            <SocialIcons />

            <PhotoGallery images={shuffleArray(data)} />

        </div>
    )
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
