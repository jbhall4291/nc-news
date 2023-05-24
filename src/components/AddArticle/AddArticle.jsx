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

  const [isSubmissionFeedback, setSubmissionFeedback] = useState(false);
  const [submissionFeedbackMessage, setSubmissionFeedbackMessage] =
    useState("");

  const [isPosting, setIsPosting] = useState(false);

  const postAnArticle = () => {
    setIsPosting(true);

    postArticle(props.loggedInUser, title, body, topic, articleImgUrl)
      .then((result) => {
        setSubmissionFeedbackMessage("ARTICLE POSTED, THANKS!");
        setTitle("");
        setBody("");
        setTopic("");
        setArticleImgUrl("");
        setIsPosting(false);
        
      })
      .catch((error) => {
        
        setSubmissionFeedback(true);
        setSubmissionFeedbackMessage(
          `ARTICLE NOT POSTED, TRY AGAIN! (${error.message})`
        );
        setIsPosting(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionFeedback(true);
    setSubmissionFeedbackMessage("ADDING ARTICLE...");
    postAnArticle();
  };

  

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
    <section className="AddArticle__section">
      <form onSubmit={handleSubmit}>
        <div className="AddArticle__div--form-group">
          <label className="AddArticle__div--form-group__label" htmlFor="author">Author:</label>
          <input className="AddArticle__input"
            type="text"
            id="author"
            value={props.loggedInUser}
            required
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="AddArticle__div--form-group__label" htmlFor="title">Title:</label>
          <input className="AddArticle__input"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="AddArticle__div--form-group__label" htmlFor="body">Body:</label>
          <textarea className="AddArticle__textarea"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="AddArticle__div--form-group__label" htmlFor="topic">Topic:</label>
          <select className="AddArticle__select"
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
          <label className="AddArticle__div--form-group__label" htmlFor="articleImgUrl">Article Image URL (optional):</label>
          <input className="AddArticle__input"
            type="text"
            id="articleImgUrl"
            value={articleImgUrl}
            onChange={(e) => setArticleImgUrl(e.target.value)}
          />
        </div>

        <button className="AddArticle__button" type="submit" disabled={isPosting}>
          <b>SUBMIT</b>
        </button>
      </form>
      <p
          className={
            isSubmissionFeedback
              ? "feedback CommentAdder__p--feedback-visible"
              : "feedback CommentAdder__p--feedback-hidden"
          }
        >
          {submissionFeedbackMessage}
        </p>
    </section>
  );
}

export default AddArticle;
