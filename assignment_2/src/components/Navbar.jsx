import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="image_tag">
        <img
          src="https://www.letsendorse.com/images/letsEndorse-Logo-Black-Transparent.png"
          alt="LetsEndorse"
        />
      </div>
      <div className="title_tag">
        <h1> Assignment Form</h1>
      </div>
    </nav>
  );
}
