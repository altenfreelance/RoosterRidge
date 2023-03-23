import React from 'react';
import RRImage from '../../components/RRImage';

export default function PhotoGallery({ images }) {

    return (
        <>
            <div className="row">
                {images.map((image, i) => (
                    <React.Fragment key={`media-kit-${i}`}>
                        <div className="col-sm-6 p-3">
                            <div>
                                <div className="container">
                                    <RRImage
                                        src={image}
                                        alt={""}
                                        style={{ width: "100%" }}
                                        caption=""
                                    />
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}