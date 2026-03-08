import React from 'react';

export default function PhotoGallery({ images }) {
  return (
    <div className="row">
      {images.map((image, i) => (
        <div key={i} className="col-sm-6 p-3">
          <div className="container">
            <img
              src={image}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
