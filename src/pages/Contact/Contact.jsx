import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Rooster Ridge - Contact</title>
      </Helmet>
      <h1>Get in Touch</h1>

      <div className="py-4 px-5" style={{ maxWidth: "650px", margin: "0 auto" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          Want to book Rooster Ridge for your next event or just say hey?
          Reach out any way you like.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <a
            href="mailto:roosterridgeofficial@gmail.com"
            style={{ fontSize: "1.1rem" }}
          >
            roosterridgeofficial@gmail.com
          </a>
          <a href="tel:15136000799" style={{ fontSize: "1.1rem" }}>
            513-600-0799
          </a>
          <a
            href="https://www.facebook.com/RoosterRidgeOfficial/"
            style={{ fontSize: "1.1rem" }}
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
