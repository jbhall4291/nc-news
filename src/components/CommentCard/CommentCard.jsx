import React, { useEffect, useState } from "react";
import { convertTimeAndDate } from "../../utils/functions";
import "./CommentCard.css";
import { Quotes } from "phosphor-react";
import { deleteComment } from "../../utils/api";

const CommentCard = ({ comment, comments, setComments, loggedInUser }) => {
  const [removeCommentButtonText, setRemoveCommentButtonText] =
    useState("REMOVE");

  const removeComment = (comment_id) => {
    setRemoveCommentButtonText("REMOVING...");
    deleteComment(comment_id)
      .then(() => {
        const updatedComments = comments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        setComments(updatedComments);
      })
      .catch((error) => {
        setRemoveCommentButtonText(error.message);
      });
  };

  return (
    <div className="CommentCard__div">
      <div className="comment-body">
        <Quotes size={20} />
        <b>{comment.body}</b>
        <Quotes size={20} />
      </div>

      <div className="comment-details">
        <div className="comment-author">
          {" "}
          <p>
            <em>by {comment.author}</em>
          </p>
        </div>

        <div className="CommentCard__div--details_area">
          <div className="time_area">
            {" "}
            <p>
              <i className="fa-solid fa-clock"></i>{" "}
              <span className="margin-on-mobile">
                {convertTimeAndDate(comment.created_at)}
              </span>
            </p>
          </div>
          <div className="votes_area">
            <p>
              <i className="fa-solid fa-thumbs-up"></i> {comment.votes}{" "}
              <span>votes</span>
            </p>
          </div>
        </div>
      </div>
      <div className="comment-button">
        {loggedInUser === comment.author && (
          <button
            className="CommentCard__button--remove-comment"
            onClick={() => removeComment(comment.comment_id)}
          >
            {/* <i className="fa-solid fa-thumbs-up"></i> */}
            {/* <p>{isRemovingComment ? <b>REMOVING...</b> : <b>REMOVE</b>}</p> */}
            <p>
              <b>{removeCommentButtonText}</b>
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
