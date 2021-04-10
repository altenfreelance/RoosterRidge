import React from "react";
import Event from "./Event";

function sortEvents(events) {
  //Remove old events (only keep shows yesterday or in the future)
  const yesterday = new Date(new Date());
  yesterday.setDate(yesterday.getDate() - 2);
  events = events.filter((event) => {
    let eventDate = new Date(event.props.date);
    return eventDate >= yesterday;
  });

  // Sort by date
  events.sort((i1, i2) => {
    let datei1 = new Date(i1.props.date);
    let datei2 = new Date(i2.props.date);

    if (datei1 < datei2) return -1;
    if (datei1 > datei2) return 1;
    return 0;
  });

  return events;
}

export default function Events() {
  const cappys1 = "images/cappys/cappys1.jpg";
  const cappys2 = "images/cappys/cappys2.jpg";
  const cappys3 = "images/cappys/cappys3.jpg";
  const cappys4 = "images/cappys/cappys4.jpg";
  const cappys5 = "images/cappys/cappys5.jpg";

  const arnolds = "images/arnolds/arnolds_us.jpg";

  const downtown = "images/downtown/RailRoadAve.jpg";
  const downtown2 = "images/downtown/RR_Nisbet1.jpg";

  const beachAcres = "images/beechAcresPark/Amphitheater.png";

  const bq = "images/bishops/BQ.jpg";

  const events = [
    <Event
      name="Rooster Ridge in the Park"
      date="06/24/2021"
      time="7:00pm"
      address="6915 Beechmont Ave. and 6910 Salem Road."
      caption="Join Rooster Ridge at Beech Acres Park for great music and fun!"
      img_url={beachAcres}
    />,
    // <Event
    //   name="Cappy's Wine and Spirits"
    //   date="05/16/2020"
    //   time="8:00pm"
    //   address="309 W. Loveland Ave, Loveland, OH 45140"
    //   img_url={cappys1}
    // />,
    <Event
      name="Bockfest with Arnold's Bar and Grill"
      date="2/29/2020"
      time="9:00pm to 12:30pm"
      address="210 E 8th St, Cincinnati, OH 45202"
      img_url={arnolds}
    />,
    <Event
      name="Rooster Ridge in Loveland"
      date="06/28/2020"
      time="6:00pm"
      address="Downtown, Loveland, OH 45140"
      img_url={downtown}
    />,
    <Event
      name="*(Cancelled due to COVID)* Independence Day with Cappy's Wine and Spirits"
      date="07/04/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys4}
    />,
    <Event
      name="Cappy's Wine and Spirits"
      date="08/15/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys3}
    />,
    <Event
      name="Rooster Ridge at Nisbet Park"
      date="09/13/2020"
      time="6:00pm"
      address="126 Karl Brown Way, Loveland, OH 45140"
      img_url={downtown2}
    />,
    <Event
      name="(Tentative) Cappy's Wine and Spirits"
      date="09/26/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys2}
    />,
    <Event
      name="(Tentative) Cappy's Wine and Spirits"
      date="10/24/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys5}
    />,
    <Event
      name="Bishop's Quarter"
      date="10/03/2020"
      time="7:00pm"
      address="212 W Loveland Ave, Loveland, OH 45140"
      img_url={bq}
    />,

    <Event
      name="(Tentative) Thanksgiving Eve with Cappy's Wine and Spirits"
      date="11/25/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys1}
    />,
    <Event
      name="(Tentative) New Years Eve with Cappy's Wine and Spirits"
      date="12/31/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys2}
    />,
  ];

  const sortedEvents = sortEvents(events);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="row">
        {sortedEvents.map((event) => (
          <React.Fragment key={event.props.date}>{event}</React.Fragment>
        ))}
        {sortedEvents.length === 0 && <p style={{color: "white", margin: "auto"}}>We don't have any public shows on the books for now. Please see our <a href="/contact">contact</a> page if you are interested in booking Rooster Ridge.</p>}
      </div>
    </div>
  );
}
