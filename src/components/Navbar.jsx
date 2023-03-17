import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <Link className="Navbar__Link" to="/">
        <b>All Topics</b>
      </Link>
      <Link className="Navbar__Link" to="/topics/coding">
        Coding
      </Link>
      <Link className="Navbar__Link" to="/topics/cooking">
        Cooking
      </Link>
      <Link className="Navbar__Link" to="/topics/football">
        Football
      </Link>
    </section>
  );
};

export default Navbar;
