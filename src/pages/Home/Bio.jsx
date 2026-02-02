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

            <div className="py-4 px-5">
                <p>
                    Rooster Ridge is a five-piece bluegrass and folk band from Loveland, Ohio. What started as late-night back-porch
                    jam sessions has grown into a group known for their energetic performances and authentic sound.
                </p>
                <p>
                    The band features Jake Alten, Andrew Alten, Greg Stevens, Bryce Clawson, and Jamie Davidson. Drawing inspiration
                    from classic acts like The Band, Old Crow Medicine Show, and the Nitty Gritty Dirt Band, they bring their own
                    style to traditional Americana music.
                </p>
                <p>
                    Rooster Ridge has played everywhere from local taprooms to festival stages, building a devoted following along the way.
                    Their 2022 album <em>Chicken Scratch</em> and 2025 live release <em>Bootleg: Live at Cappy's</em> capture the
                    energy of their performances. Check out our <a href="/music">music</a>, browse the <a href="/gallery">photo gallery</a>,
                    catch us at an upcoming <a href="/shows">show</a>, or <a href="/contact">book us</a> for your next event!
                </p>

            </div>

            <div className="d-flex justify-content-center my-4">
                <a href="/music" style={{ maxWidth: "500px", width: "100%", display: "block" }}>
                    <RRImage
                        src="/images/albums/live-at-cappys/Cover.jpg"
                        alt="Rooster Ridge - Live at Cappy's"
                        style={{ width: "100%", borderRadius: "12px", cursor: "pointer" }}
                    />
                </a>
            </div>

        </div>
    )
}