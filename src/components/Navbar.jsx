import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

const Navbar = () => {
  const [selectedTopic, setSelectedTopic] = useState("allTopics");

  function handleTopicClick(topic) {
    setSelectedTopic(topic);
  }

  return (
    <section className="navbar">
    <h1 className="header__h1--navbar">NewsBuzz</h1>
      <Link
        to="/"
        onClick={() => handleTopicClick("allTopics")}
        className={`Navbar__Link ${
          selectedTopic === "allTopics"
            ? "Navbar__Link--active"
            : "Navbar__Link"
        }`}
      >
        All Topics
      </Link>

      <Link
        to="/topics/coding"
        onClick={() => handleTopicClick("coding")}
        className={`Navbar__Link ${
          selectedTopic === "coding" ? "Navbar__Link--active" : "Navbar__Link"
        }`}
      >
        Coding
      </Link>
      <Link
        to="/topics/cooking"
        onClick={() => handleTopicClick("cooking")}
        className={`Navbar__Link ${
          selectedTopic === "cooking" ? "Navbar__Link--active" : "Navbar__Link"
        }`}
      >
        Cooking
      </Link>
      <Link
        to="/topics/football"
        onClick={() => handleTopicClick("football")}
        className={`Navbar__Link ${
          selectedTopic === "football" ? "Navbar__Link--active" : "Navbar__Link"
        }`}
      >
        Football
      </Link>
    </section>
  );
};

export default Navbar;
