import React from "react";
import Event from "./Event";


export default function Events(){

    const cappys1 = "images/cappys/cappys1.jpg";
    const cappys2 = "images/cappys/cappys2.jpg";
    const cappys3 = "images/cappys/cappys3.jpg";
    const cappys4 = "images/cappys/cappys4.jpg";
    const cappys5 = "images/cappys/cappys5.jpg";

    const arnolds = "images/arnolds/arnolds_us.jpg";

    const downtown = "images/downtown/RailRoadAve.jpg";

    return (
      <div>
        <h1>Upcoming Events</h1>
        <div className="row">
          <Event
            name="Bockfest with Arnolds Bar and Grill"
            date="2/29/2020"
            time="9:00pm to 12:30pm"
            address="210 E 8th St, Cincinnati, OH 45202"
            img_url={arnolds}
          />
          <Event
            name="Cappys Wine and Spirits"
            date="03/28/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys5}
          />
          <Event
            name="Cappys Wine and Spirits"
            date="05/16/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys1}
          />
           <Event
            name="Rooster Ridge in Loveland"
            date="06/28/2020"
            time="6:00pm"
            address="Downtown, Loveland, OH 45140"
            img_url={downtown}
          />
          <Event
            name="Independence Day with Cappys Wine and Spirits"
            date="07/04/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys4}
          />
          <Event
            name="Cappys Wine and Spirits"
            date="08/15/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys3}
          />
          <Event
            name="Cappys Wine and Spirits"
            date="09/26/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys2}
          />
          <Event
            name="Cappys Wine and Spirits"
            date="10/24/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys5}
          />
          <Event
            name="Thanksgiving Eve with Cappys Wine and Spirits"
            date="11/25/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys1}
          />
          <Event
            name="New Years Eve with Cappys Wine and Spirits"
            date="12/31/2020"
            time="8:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys2}
          />
        </div>
      </div>
    );
  }

