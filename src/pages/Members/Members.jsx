import React from 'react';
import Member from './Member';
import { Helmet } from "react-helmet-async";

function Members() {
  return (
    <div>
      <Helmet>
        <title>Rooster Ridge - Members</title>
      </Helmet>

      <h1>Meet the Band</h1>
      <div className="row">
        <Member name="Andrew Alten" instrument="Mandolin, Dobro, Vocals" img_url="images/members/Andrew.jpg" />
        <Member name="Jacob Alten" instrument="Guitar, Vocals" img_url="images/members/Jacob.jpg" />
        <Member name="Bryce Clawson" instrument="Vocals, Harmonica" img_url="images/members/Bryce.jpg" />
        <Member name="Greg Stevens" instrument="Banjo, Violin" img_url="images/members/Greg.jpg" />
        <Member name="Jamie Davidson" instrument="Bass, Vocals" img_url="images/members/Jamie.jpg" />
        <Member name="Dave Bauer" instrument="Sound" img_url="images/members/OLAS.jpg" />
      </div>
    </div>
  );
}

export default Members;
