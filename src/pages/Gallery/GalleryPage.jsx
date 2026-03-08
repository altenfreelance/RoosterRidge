import React, { useMemo } from 'react';
import { Helmet } from "react-helmet-async";
import PhotoGallery from './PhotoGallery';
import data from "./parsed-gallery.json";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function GalleryPage() {
  const images = useMemo(() => shuffleArray(data), []);

  return (
    <div>
      <Helmet>
        <title>Rooster Ridge - Gallery</title>
      </Helmet>
      <h1>Gallery</h1>
      <PhotoGallery images={images} />
    </div>
  );
}
