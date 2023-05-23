import React, { useState, useEffect } from "react";
import "./AddArticle.css";
import { postArticle } from "../../utils/api";
import { getAllTopics } from "../../utils/api";

function AddArticle(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState([]);
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

  console.log(topics);

  useEffect(() => {
    // Fetch the topics from the API and set them in the state
    getAllTopics()
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);

  return (
    <section className="AddArticle">
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
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
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

        <button type="submit">
          <b>SUBMIT</b>
        </button>
      </form>
    </section>
  );
}

export default AddArticle;
