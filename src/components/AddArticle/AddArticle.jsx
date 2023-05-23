import React, { useState } from "react";
import "./AddArticle.css";
import { postArticle } from "../../utils/api";

function AddArticle(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");
  const [topics] = useState(["topic1", "topic2", "topic3"]);
  const [articleImgUrl, setArticleImgUrl] = useState("");

  const postAnArticle = () => {
    postArticle(props.loggedInUser, title, body, topic, articleImgUrl)
      .then((result) => {
        console.log("success!!!!");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAnArticle();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={props.loggedInUser}
            required
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            <option value="">Select a topic</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="articleImgUrl">Article Image URL (optional):</label>
          <input
            type="text"
            id="articleImgUrl"
            value={articleImgUrl}
            onChange={(e) => setArticleImgUrl(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddArticle;
