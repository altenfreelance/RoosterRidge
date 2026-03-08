import React from "react";
import Event from "./Event";
import data from "./parsed-events.json";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function sortEvents(events) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 2);
  return events
    .filter((event) => new Date(event.props.date) >= yesterday)
    .sort((a, b) => new Date(a.props.date) - new Date(b.props.date));
}

export default function Events() {
  const events = data.map((eventBlob) => {
    const dateTime = new Date(eventBlob.meta.gigDateTime);
    const date = `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`;
    const time = dateTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const zone = dateTime
      .toLocaleTimeString("en-us", { timeZoneName: "short" })
      .split(" ")[2];

    return (
      <Event
        key={eventBlob.meta.title + date}
        name={eventBlob.meta.title}
        date={date}
        time={time + " " + zone}
        address={eventBlob.meta.address}
        img_url={eventBlob.meta.thumbnail}
        caption={eventBlob.meta.caption}
      />
    );
  });

  const sortedEvents = sortEvents(events);

  return (
    <div>
      <Helmet>
        <title>Rooster Ridge - Shows</title>
      </Helmet>

      <h1>Upcoming Shows</h1>
      <div className="row">
        {sortedEvents.map((event) => (
          <React.Fragment key={event.props.date + event.props.name}>
            {event}
          </React.Fragment>
        ))}
      </div>

      {sortedEvents.length === 0 && (
        <div className="container" style={{ maxWidth: "600px", margin: "2rem auto" }}>
          <p style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            No public shows on the books right now.
          </p>
          <p>
            Interested in booking Rooster Ridge? Head over to our{" "}
            <Link to="/contact">contact page</Link> to get in touch.
          </p>
        </div>
      )}
    </div>
  );
}
