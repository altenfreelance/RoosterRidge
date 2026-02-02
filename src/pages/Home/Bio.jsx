import React from 'react';
import { Helmet } from "react-helmet";
import RRImage from '../../components/RRImage';

export default function Bio() {
    return (
        <div>
            <Helmet>
                <title>Rooster Ridge</title>
            </Helmet>
            <h1>About the Band</h1>

            <div className="d-flex justify-content-center my-4">
                <a href="/music" style={{ maxWidth: "500px", width: "100%", display: "block" }}>
                    <RRImage
                        src="/images/albums/live-at-cappys/Cover.jpg"
                        alt="Rooster Ridge - Live at Cappy's"
                        style={{ width: "100%", borderRadius: "12px", cursor: "pointer" }}
                    />
                </a>
            </div>

            <div className="py-4 px-5">
                <p>
                    Born from late-night back-porch jam sessions in Loveland, Ohio, Rooster Ridge has evolved into one of the region's
                    most captivating bluegrass and folk acts. With roots in traditional Americana and a forward-thinking approach to songwriting,
                    the band channels the spirit of The Band, Old Crow Medicine Show, and the Nitty Gritty Dirt Band while carving out
                    their own distinctive groove.
                </p>
                <p>
                    The Alten Brothers—Jake on guitar and vocals, Andrew on mandolin and dobro—founded Rooster Ridge alongside
                    Greg Stevens on banjo and fiddle. The lineup comes alive with Bryce Clawson's powerful vocals and harmonica, and Jamie Davidson
                    laying down the bass and harmony vocals. Together, they've crafted a sound that's equal parts honky-tonk grit and
                    front-porch soul.
                </p>
                <p>
                    From intimate taprooms to festival stages, Rooster Ridge has built a devoted following through their electrifying <a href="/shows">live shows</a> and authentic storytelling. Their 2022 studio album <em>Chicken Scratch</em> and their latest release, the live album
                    <em>Bootleg: Live at Cappy's</em>, capture the raw energy and musicianship that make every Rooster Ridge performance unforgettable.
                    Check out our <a href="/music">music</a>, browse the <a href="/gallery">photo gallery</a>, and <a href="/contact">book us</a> for your next event. Come experience the journey for yourself!
                </p>

            </div>

        </div>
    )
}