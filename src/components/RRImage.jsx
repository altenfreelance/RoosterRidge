import React from 'react';
import { useEffect, useState } from 'react';

import ProgressiveImage from "react-progressive-graceful-image";

export default function RRImage(props) {

    const [imgSrc, setImgSrc] = useState("")
    const [placeholderSrc, setPlaceholderSrc] = useState("")
    const [sourcesLoading, setSourcesLoading] = useState(true)

    useEffect(() => {
        setImgSrc(props.src)
        setPlaceholderSrc(getPlaceholderSrc(props.src))
        setSourcesLoading(false)
    }, [props.src])

    return (
        <>
            {!sourcesLoading && <ProgressiveImage
                src={imgSrc}
                placeholder={placeholderSrc}
            >
                {(src, loading) => <img {...props} src={src} alt={props.alt} style={{
                    ...props.style,
                    ...{
                        filter: loading ? 'blur(7px)' : '',
                    }
                }} />}
            </ProgressiveImage>}
        </>

    )
}

function getPlaceholderSrc(src) {
    return src.replace('images/', 'images/compressed/');
}