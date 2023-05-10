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

  const [isPosting, setIsPosting] = useState(false);

  const postAComment = () => {
    setIsPosting(true);
    postComment(article_id, commentText)
      .then((addedComment) => {
        setLastSuccessfullySubmittedCommentText(commentText);
        setComments((currComments) => {
          return [addedComment, ...currComments];
        });
        setSubmissionFeedbackMessage("comment posted, thank you!");
        setCommentText("");
        setIsPosting(false);
      })
      .catch((error) => {
        setSubmissionFeedback(true);
        setSubmissionFeedbackMessage(
          `comment not posted, submit again! (${error.message})`
        );
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
      <form onSubmit={handleSubmit} class="container">
        <label className="formLabel label" htmlFor="commentText">
          <b>POST A COMMENT</b>
        </label>

        <input
          className="text-area"
          value={commentText}
          id="commentText"
          type="text"
          onChange={(event) => setCommentText(event.target.value)}
        />

        <button
          type="submit"
          id="button"
          className="button"
          disabled={isPosting}
        >
          <b>SUBMIT</b>
        </button>

        <p
          className={
            isSubmissionFeedback ? "visible feedback" : "hidden feedback"
          }
        >
          {submissionFeedbackMessage}
        </p>
      </form>
    </section>
  );
};

export default CommentAdder;
