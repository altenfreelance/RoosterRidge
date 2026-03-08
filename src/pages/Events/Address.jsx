import React from "react";

export default function Address({ address }) {
  if (!address) return null;

  function onMapClick() {
    const isApple =
      /iPhone|iPad|iPod/.test(navigator.userAgent);
    const url = isApple
      ? "http://maps.apple.com/?q=" + address
      : "https://maps.google.com/maps?q=" + address;
    window.open(url);
  }

  return (
    <p className="link" onClick={onMapClick} style={{ cursor: "pointer" }}>
      {address}
    </p>
  );
}
