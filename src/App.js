import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import Users from "./components/Users/Users";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("cooljmessy");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/users" element={<Users loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle loggedInUser={loggedInUser} />}
        />
        <Route path="/*" element={<p>404 page not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
