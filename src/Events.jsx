import React from "react";
import Event from "./Event";


export default function Events(){

    // const cappys_12_20 = "images/cappys_12_20.jpg";
    const arnolds = "images/arnolds.jpg";
    

    return (
      <div>
        <h1>Upcoming Events</h1>
        <div className="row">
          <Event
            name="Arnolds Bar and Grill"
            date="1/11/2020"
            time="8:00pm to 11:30pm"
            address="210 E 8th St, Cincinnati, OH 45202"
            img_url={arnolds}
          />
          {/* <Event
            name="New Year's Eve with Cappys Wine and Spirits"
            date="12/31/2019"
            time="8:00pm to 11:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys_12_31}
          /> */}
        </div>
      </div>
    );
  }

