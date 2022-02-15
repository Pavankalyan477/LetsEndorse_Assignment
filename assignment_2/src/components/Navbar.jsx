import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="image_tag">
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/202/19432621.54b2adad8b7a1.jpg"
          alt="LetsEndorse"
        />
      </div>
      <div className="title_tag">
        <h1>LetsEndorse Assignment Form</h1>
      </div>
    </nav>
  );
}
