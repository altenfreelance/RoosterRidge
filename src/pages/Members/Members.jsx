import React from 'react'
import Member from './Member'
import { Helmet } from "react-helmet";

function Members() {
    const andrew_img = 'images/members/Andrew.jpg';
    const jacob_img = 'images/members/Jacob.jpg'
    const bryce_img = 'images/members/Bryce.jpg'
    const greg_img = 'images/members/Greg.jpg'
    const jamie_img = 'images/members/Jamie.jpg'
    const bauer_img = 'images/members/OLAS.jpg'

    return (
        <div>
            <Helmet>
                <title>RR - Members</title>
            </Helmet>

            <h1>Meet the Band</h1>
            <div className="row">
                <Member name="Andrew Alten" instrument="Mandolin, Dobro, Vocals" img_url={andrew_img} />
                <Member name="Jacob Alten" instrument="Guitar, Vocals" img_url={jacob_img} />
                <Member name="Bryce Clawson" instrument="Vocals, Harmonica" img_url={bryce_img} />
                <Member name="Greg Stevens" instrument="Banjo, Violin" img_url={greg_img} />
                <Member name="Jamie Davidson" instrument="Bass, Vocals" img_url={jamie_img} />
                <Member name="Dave Bauer" instrument="Sound" img_url={bauer_img} />
            </div>
        </div>
    )

}

export default Members;
