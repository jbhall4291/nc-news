import React, { useState } from "react";
import "./AddArticle.css";
import { postArticle } from "../../utils/api";
import { postTopic, getAllTopics } from "../../utils/api";

function AddArticle(props) {
  //user input states
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");

  const [customTopic, setCustomTopic] = useState("");
  const [customTopicDescription, setCustomTopicDescription] = useState("");

  const handleCustomTopicChange = (event) => {
    setCustomTopic(event.target.value);
  };

  const handleCustomTopicDescriptionChange = (event) => {
    setCustomTopicDescription(event.target.value);
  };

  const [articleImgUrl, setArticleImgUrl] = useState("");

  const [isSubmissionFeedback, setSubmissionFeedback] = useState(false);
  const [submissionFeedbackMessage, setSubmissionFeedbackMessage] =
    useState("");

  const [isPosting, setIsPosting] = useState(false);

  const postAnArticle = () => {
    setIsPosting(true);
    postArticle(
      props.loggedInUser,
      title,
      body,
      customTopic.toLowerCase() || topic,
      articleImgUrl
    )
      .then(() => {
        setSubmissionFeedbackMessage("ARTICLE POSTED, THANKS!");
        setTitle("");
        setBody("");
        setTopic("");
        setArticleImgUrl("");
        setCustomTopic("");
        setCustomTopicDescription("");
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

    if (!customTopic) {
      //using topic that already exists, just post the article
      postAnArticle();
    } else if (
      customTopic &&
      props.allTopics.some((topic) => topic.slug === customTopic.toLowerCase())
    ) {
      //user selected CUSTOM TOPIC but its one that already exists!
      postAnArticle();
    } else {
      //custom topic provided, that does not already exist
      postTopic(customTopic, customTopicDescription)
        .then(() => {
          return postAnArticle();
        })
        .then(() => {
          return getAllTopics();
        })
        .then((result) => {
          props.setAllTopics(result);
        });
    }
  };

  return (
    <section className="AddArticle__section">
      <form onSubmit={handleSubmit}>
        <div className="AddArticle__div--form-group">
          <label
            className="AddArticle__div--form-group__label"
            htmlFor="author"
          >
            Author:
          </label>
          <input
            className="AddArticle__input"
            type="text"
            id="author"
            value={props.loggedInUser}
            required
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="AddArticle__div--form-group__label" htmlFor="title">
            Title:
          </label>
          <input
            className="AddArticle__input"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="AddArticle__div--form-group__label" htmlFor="body">
            Body:
          </label>
          <textarea
            className="AddArticle__textarea"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="AddArticle__div--form-group__label" htmlFor="topic">
            Topic:
          </label>
          <select
            className="AddArticle__select"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            <option value="">Select A Topic</option>
            {props.allTopics.map((topic) => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
            <option value="custom">---Create New---</option>
          </select>

          {topic === "custom" && (
            <>
              <input
                className="AddArticle__input"
                type="text"
                value={customTopic}
                onChange={handleCustomTopicChange}
                placeholder="Enter a topic name"
                required
              />
              <input
                className="AddArticle__input"
                type="text"
                value={customTopicDescription}
                onChange={handleCustomTopicDescriptionChange}
                placeholder="Enter a topic description"
                required
              />
            </>
          )}
        </div>
        <div className="form-group">
          <label
            className="AddArticle__div--form-group__label"
            htmlFor="articleImgUrl"
          >
            Article Image URL (optional):
          </label>
          <input
            className="AddArticle__input"
            type="text"
            id="articleImgUrl"
            value={articleImgUrl}
            onChange={(e) => setArticleImgUrl(e.target.value)}
            pattern="https?://.*\.(jpg|jpeg|png|gif|bmp)$"
            title="Please enter an image URL ending with jpg, jpeg, png, gif, or bmp"
          />
        </div>

        <button
          className="AddArticle__button"
          type="submit"
          disabled={isPosting}
        >
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
