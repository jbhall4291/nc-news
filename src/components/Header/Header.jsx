import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedTopic, setSelectedTopic] = useState("allTopics");
  function handleTopicClick(topic) {
    setSelectedTopic(topic);
  }
  return (
    <header>
      <Link className="no-underline" to="/" onClick={() => handleTopicClick("allTopics")}>
        <h1>NewsBuzz</h1>
      </Link>

      <Link to="/users">
        <i className="user fa-solid fa-user"></i>
      </Link>

{/* commented out until functionality for adding an article exists! */}
      {/* <Link to="/addArticle">
        <i className="add-article fa-solid fa-plus"></i>
      </Link> */}

      <nav>
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
