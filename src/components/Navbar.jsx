import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/">
        <h2 className="navbar__h2"><b>View All</b></h2>
      </Link>
      <Link to="/topics/coding">
        <h2 className="navbar__h2">Coding</h2>
      </Link>
      <Link to="/topics/cooking">
        <h2 className="navbar__h2">Cooking</h2>
      </Link>
      <Link to="/topics/football">
        <h2 className="navbar__h2">Football</h2>
      </Link>
    </section>
  );
};

export default Navbar;
