import React from 'react';
import { useEffect, useState } from 'react';

import ProgressiveImage from "react-progressive-graceful-image";

export default function RRImage(props) {

    const [src, setSource] = useState("")
    const [placeholderSrc, setPlaceholderSrc] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setSource(props.src)
        setPlaceholderSrc(getPlaceholderSrc(props.src))
        setLoading(false)
    }, [props.src])

    return (
        <>
            {!loading && <ProgressiveImage
                src={src}
                placeholder={placeholderSrc}
            >
                {(src) => < img {...props} src={src} />}
            </ProgressiveImage>}
        </>

    )
}

function getPlaceholderSrc(src) {
    return src.replace('images/', 'images/tiny/');
}