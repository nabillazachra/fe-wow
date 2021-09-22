import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/subscribe">Subscribe</Link>
        </li>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
      </ul>
    </nav>
  );
}
