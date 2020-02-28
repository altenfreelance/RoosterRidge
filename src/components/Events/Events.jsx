import React from "react";
import Event from "./Event";

function sortEvents(events) {
  
  events.sort((i1, i2) => {

    let datei1 = new Date(i1.props.date);
    let datei2 = new Date(i2.props.date);

    if (datei1 < datei2) return -1;
    if (datei1 > datei2) return 1;
    return 0;

  })
  
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

  const beachAcres = "images/beechAcresPark/Amphitheater.png";

  const events = [
    <Event
      name="Rooster Ridge in the Park"
      date="06/18/2020"
      time="7:00pm"
      address="6915 Beechmont Ave. and 6910 Salem Road."
      caption="Join Rooster Ridge at Beech Acres Park for great music and fun!"
      img_url={beachAcres}
    />,
    <Event
      name="Cappy's Wine and Spirits"
      date="05/16/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys1}
    />,
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
      name="Independence Day with Cappy's Wine and Spirits"
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
      name="Cappy's Wine and Spirits"
      date="09/26/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys2}
    />,
    <Event
      name="Cappy's Wine and Spirits"
      date="10/24/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys5}
    />,
    <Event
      name="Thanksgiving Eve with Cappy's Wine and Spirits"
      date="11/25/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys1}
    />,
    <Event
      name="New Years Eve with Cappy's Wine and Spirits"
      date="12/31/2020"
      time="8:00pm"
      address="309 W. Loveland Ave, Loveland, OH 45140"
      img_url={cappys2}
    />
  ];

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="row">
        {sortEvents(events).map(event => <React.Fragment key={event.props.date}>{event}</React.Fragment>)}
      </div>
    </div>
  );
}

