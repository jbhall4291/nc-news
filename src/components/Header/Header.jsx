import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [selectedTopic, setSelectedTopic] = useState("allTopics");

  function handleTopicClick(topic) {
    setSelectedTopic(topic);
  }

  return (
    <header>
      <h1>
        <Link
          className="no-underline"
          to="/"
          onClick={() => handleTopicClick("allTopics")}
        >
          NewsBuzz
        </Link>
      </h1>
      <div className="user-area">
        <Link to="/users">
          <i className="user fa-solid fa-user"></i>
        </Link>
      </div>

      <Link to="/addArticle">
        <i className="add-article fa-solid fa-plus"></i>
      </Link>

      {props.topicsLoading ? (
        <div className="Header__div--loading-topics">fetching topics...</div>
      ) : (
        <nav>
          {/* hardcode all topics, then map each topic */}
          <Link
            to="/"
            className={`Navbar__Link ${
              selectedTopic === "allTopics"
                ? "Navbar__Link--active"
                : "Navbar__Link"
            }`}
            onClick={() => handleTopicClick("allTopics")}
          >
            ALL ARTICLES
          </Link>
          {props.allTopics.map((topic) => {
            return (
              <Link
                key={topic.slug}
                to={`/topics/${topic.slug}`}
                className={`Navbar__Link ${
                  selectedTopic === topic.slug
                    ? "Navbar__Link--active"
                    : "Navbar__Link"
                }`}
                onClick={() => handleTopicClick(topic.slug)}
              >
                {topic.slug.toUpperCase()}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
