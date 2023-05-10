import React from "react";
import { convertTimeAndDate } from "../../utils/functions";
import "./CommentCard.css";
import { Quotes } from "phosphor-react";

const CommentCard = ({ comment }) => {
  return (
    <div className="CommentCard__div">
      <Quotes size={20} mirrored={true} />
      <b>{comment.body}</b>
      <Quotes size={20} />
      <p>
        <em>by {comment.author}</em>nice
      </p>

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
  );
};

export default CommentCard;
