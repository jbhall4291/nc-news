import React from "react";
import { convertTimeAndDate } from "../../utils/functions";
import "./CommentCard.css";
import { Quotes } from "phosphor-react";

const CommentCard = ({ comment, loggedInUser }) => {
  return (
    <div className="CommentCard__div">
      <div class="comment-body">
        <Quotes size={20} />
        <b>{comment.body}</b>
        <Quotes size={20} />
      </div>

      <div class="comment-details">
        <div class="comment-author">
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
      <div class="comment-button">
        {loggedInUser === comment.author && (
          <button
            className="CommentCard__button--remove-comment"
            // onClick={() => updateVotes(-1)}
          >
            {/* <i className="fa-solid fa-thumbs-up"></i> */}
            <p>
              <b>REMOVE</b>
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
