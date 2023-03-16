import React from "react";
import { useState } from "react";
import "../styling/CommentAdder.css";
import { postComment } from "../utils/api";

const CommentAdder = ({ article_id, setComments }) => {
  const [commentText, setCommentText] = useState("");

  const [
    lastSuccessfullySubmittedCommentText,
    setLastSuccessfullySubmittedCommentText,
  ] = useState("");

  const [isSubmissionFeedback, setSubmissionFeedback] = useState(false);
  const [submissionFeedbackMessage, setSubmissionFeedbackMessage] =
    useState("");

  const postAComment = () => {
    postComment(article_id, commentText)
      .then((addedComment) => {
        setLastSuccessfullySubmittedCommentText(commentText);
        setComments((currComments) => {
          return [addedComment, ...currComments];
        });
        setSubmissionFeedbackMessage("comment posted, thank you!");
        setCommentText("")
      })
      .catch((error) => {
        setSubmissionFeedback(true);
        setSubmissionFeedbackMessage(`comment not posted, submit again! (${error.message})`);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmissionFeedback(false);
    setSubmissionFeedbackMessage("");
    if (commentText === "") {
      setSubmissionFeedback(true);
      setSubmissionFeedbackMessage("comment is empty!");
    } else if (commentText === lastSuccessfullySubmittedCommentText) {
      setSubmissionFeedback(true);
      setSubmissionFeedbackMessage("comment already posted!");
    } else {
      setSubmissionFeedback(true);
      setSubmissionFeedbackMessage("adding comment...");
      postAComment();
    }
  };

  return (
    <section className="CommentAdder__section">
      <h2>add a comment</h2>

      <p className={isSubmissionFeedback ? "visible" : "hidden"}>
        {submissionFeedbackMessage}
      </p>

      <form onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="commentText">
          add a comment
        </label>

        <input
          value={commentText}
          id="commentText"
          type="text"
          onChange={(event) => setCommentText(event.target.value)}
        />

        <button type="submit" id="button" className="CommentAdder__button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CommentAdder;
