import React from "react";
import { useState } from "react";
import "./CommentAdder.css";
import { postComment } from "../../utils/api";

const CommentAdder = ({ article_id, setComments, loggedInUser }) => {

  
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
    postComment(article_id, commentText, loggedInUser)
      .then((addedComment) => {
        setLastSuccessfullySubmittedCommentText(commentText);
        setComments((currComments) => {
          return [addedComment, ...currComments];
        });
        setSubmissionFeedbackMessage("COMMENT POSTED, THANKS!");
        setCommentText("");
        setIsPosting(false);
      })
      .catch((error) => {
        setSubmissionFeedback(true);
        setSubmissionFeedbackMessage(
          `COMMENT NOT POSTED, TRY AGAIN! (${error.message})`
        );
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmissionFeedback(false);
    setSubmissionFeedbackMessage("");
    if (commentText === "") {
      setSubmissionFeedback(true);
      setSubmissionFeedbackMessage("COMMENT FIELD EMPTY!");
    } else if (commentText === lastSuccessfullySubmittedCommentText) {
      setSubmissionFeedback(true);
      setSubmissionFeedbackMessage("COMMENT ALREADY POSTED!");
    } else {
      setSubmissionFeedback(true);
      setSubmissionFeedbackMessage("ADDING COMMENT...");
      postAComment();
    }
  };

  return (
    <section className="CommentAdder__section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentText">
          <b>POST A COMMENT</b>
        </label>

        <input
          value={commentText}
          id="commentText"
          type="text"
          placeholder="type your comment here..."
          onChange={(event) => setCommentText(event.target.value)}
        />

        <button
          className="CommentAdder__button"
          type="submit"
          id="button"
          disabled={isPosting}
        >
          <b>SUBMIT</b>
        </button>

        <p
          className={
            isSubmissionFeedback
              ? "feedback CommentAdder__p--feedback-visible"
              : "feedback CommentAdder__p--feedback-hidden"
          }
        >
          {submissionFeedbackMessage}
        </p>
      </form>
    </section>
  );
};

export default CommentAdder;
