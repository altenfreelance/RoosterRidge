import React from 'react'
import Member from './Member'

function Members(){
    const andrew_img = 'images/members/Andrew.jpg';
    const jacob_img = 'images/members/Jacob.jpg'
    const bryce_img = 'images/members/Bryce.jpg'
    const greg_img = 'images/members/Greg.jpg'
    const joey_img = 'images/members/Joey.jpg'
    const vince_img = 'images/members/Vince.jpg'
    const jamie_img = 'images/members/Jamie.jpg'
    const bauer_img = 'images/members/OLAS.jpg'

        return (
            <div>
                <h1>Meet the Band</h1>
                <div className="row">
                    <Member name="Andrew Alten" instrument="Mandolin" img_url={andrew_img}/>
                    <Member name="Jacob Alten" instrument="Vocal and Guitar" img_url={jacob_img}/>
                    <Member name="Bryce Clawson" instrument="Vocals and Harmonica " img_url={bryce_img}/>
                    <Member name="Greg Stevens" instrument="Banjo and Guitar" img_url={greg_img}/>
                    <Member name="Joey Oberholzer" instrument="Vocals" img_url={joey_img}/>
                    <Member name="Vince Stevens" instrument="Dobro" img_url={vince_img}/>
                    <Member name="Jamie" instrument="Bass" img_url={jamie_img}/>
                    <Member name="Dave Bauer" instrument="Sound" img_url={bauer_img}/>
                </div>
            </div>
        )
    
}

export default Members;
