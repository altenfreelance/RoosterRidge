import React from "react";
import Address from "./Address";

export default function Event({ name, time, img_url, date, address, caption }) {
  return (
    <div className="col-sm-6 p-3">
      <div className="container">
        <h4><b>{name}</b></h4>
        <h5>{new Date(date).toDateString()}</h5>
        <h5>{time}</h5>
        <Address address={address} />
        <figure>
          {caption && <figcaption>{caption}</figcaption>}
          <img
            src={img_url}
            alt={name}
            style={{ width: "100%", borderRadius: "8px" }}
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  );
}
