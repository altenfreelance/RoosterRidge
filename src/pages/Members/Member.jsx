import React from "react";
import "./member.css";

export default function Member({ name, instrument, img_url }) {
  return (
    <div className="col-sm-4 p-3">
      <div className="container">
        <h4><b>{name}</b></h4>
        <p>{instrument}</p>
      </div>
      <img
        src={img_url}
        alt={name}
        className="rounded-circle"
        style={{ width: "100%" }}
        loading="lazy"
      />
    </div>
  );
}
