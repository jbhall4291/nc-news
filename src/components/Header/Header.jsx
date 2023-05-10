import React, { useState } from "react";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedTopic, setSelectedTopic] = useState("allTopics");
  function handleTopicClick(topic) {
    setSelectedTopic(topic);
  }
  return (
    <header>
      <h1>NewsBuzz</h1>
      <nav>
        <h1 className="header__h1--in-navbar">NewsBuzz</h1>
        <Link
          to="/"
          onClick={() => handleTopicClick("allTopics")}
          className={`Navbar__Link ${
            selectedTopic === "allTopics"
              ? "Navbar__Link--active"
              : "Navbar__Link"
          }`}
        >
          ALL TOPICS
        </Link>

        <Link
          to="/topics/coding"
          onClick={() => handleTopicClick("coding")}
          className={`Navbar__Link ${
            selectedTopic === "coding" ? "Navbar__Link--active" : "Navbar__Link"
          }`}
        >
          CODING
        </Link>
        <Link
          to="/topics/cooking"
          onClick={() => handleTopicClick("cooking")}
          className={`Navbar__Link ${
            selectedTopic === "cooking"
              ? "Navbar__Link--active"
              : "Navbar__Link"
          }`}
        >
          COOKING
        </Link>
        <Link
          to="/topics/football"
          onClick={() => handleTopicClick("football")}
          className={`Navbar__Link ${
            selectedTopic === "football"
              ? "Navbar__Link--active"
              : "Navbar__Link"
          }`}
        >
          FOOTBALL
        </Link>
      </nav>
    </header>
  );
};

export default Header;
