import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/">
        <h2 className="navbar__h2">View All Articles</h2>
      </Link>
      <Link to="/placeholder">
        <h2 className="navbar__h2">Placeholder For Topic 1</h2>
      </Link>
      <Link to="/placeholder">
        <h2 className="navbar__h2">Placeholder For Topic 2</h2>
      </Link>
    </section>
  );
};

export default Navbar;
