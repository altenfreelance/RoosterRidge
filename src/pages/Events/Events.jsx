import React from "react";
import Event from "./Event";
import data from "./parsed-events.json"
import { Helmet } from "react-helmet";

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

  const events = data.map((eventBlob) => {

    const dateTime = new Date(eventBlob.meta.gigDateTime)

    const date = `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`

    const time = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const zone = dateTime.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]

    return (

      <Event
        name={eventBlob.meta.title}
        date={date}
        time={time + " " + zone}
        address={eventBlob.meta.address}
        img_url={eventBlob.meta.thumbnail}
        caption={eventBlob.meta.caption}

      />
    )
  })

  const sortedEvents = sortEvents(events);

  return (

    <div>
      <Helmet>
        <title>RR - Shows</title>
      </Helmet>

      <h1>Upcoming Events</h1>
      <div className="row">
        {sortedEvents.map((event) => (
          <React.Fragment key={event.props.date}>{event}</React.Fragment>
        ))}
        {sortedEvents.length === 0 && <p className="container-fluid" style={{ color: "white", margin: "auto" }}>We don't have any public shows on the books for now. Please see our <a href="/contact">contact</a> page if you are interested in booking Rooster Ridge.</p>}
      </div>
    </div>
  );
}
