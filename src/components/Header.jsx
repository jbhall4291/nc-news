import React from "react";

import "../styling/Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <h1 className="header__h1">NewsBuzz</h1>
      <Navbar />
    </header>
  );
};

export default Header;
