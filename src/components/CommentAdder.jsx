import React from "react";
import { useState } from "react";
import "../styling/CommentAdder.css";
import { postComment } from "../utils/api";

const CommentAdder = ({ article_id, setComments }) => {
  const [commentText, setCommentText] = useState("");
  // const [finalisedComment, setFinalisedComment] = useState("");
  

const postAComment = () => {
  postComment(article_id, commentText).then((addedComment) => {
setComments((currComments) => {
 return [addedComment, ...currComments]
})
  })
  
  // setFinalisedComment( commentText );
  

  // need a loading thing going on,
  // after which the new comment should appear
  // in the Comments component underneath. and
  // a success message (or similar)
  // also some error handling (blank text box, same comment twice etc)

}

  const handleSubmit = (event) => {
    event.preventDefault();
    postAComment();
  };

  

  return (
    <section className="CommentAdder__section">
      <h2>add a comment</h2>

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
