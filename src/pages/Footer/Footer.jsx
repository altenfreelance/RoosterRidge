import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer
      className="mastfoot"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <SocialIcons />
    </footer>
  );
}
