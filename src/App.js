import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Users from "./components/Users/Users";
import AddArticle from "./components/AddArticle/AddArticle";
import Modal from "./components/Modal/Modal";
import { getAllTopics } from "./utils/api";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("cooljmessy");

  const [allTopics, setAllTopics] = useState([]);
  const [topicsLoading, setTopicsLoading] = useState(true);

  useEffect(() => {
    setTopicsLoading(true);
    getAllTopics().then((result) => {
      setAllTopics(result);
      setTopicsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header
        allTopics={allTopics}
        setAllTopics={setAllTopics}
        topicsLoading={topicsLoading}
      />
      <Modal />
      <Routes>
        <Route
          path="/users"
          element={
            <Users
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />
        <Route
          path="/addArticle"
          element={
            <AddArticle
              loggedInUser={loggedInUser}
              allTopics={allTopics}
              setAllTopics={setAllTopics}
            />
          }
        />
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle
              loggedInUser={loggedInUser}
              setAllTopics={setAllTopics}
            />
          }
        />
        <Route path="/*" element={<p>404 page not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
