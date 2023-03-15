import React from 'react';
import {convertTimeAndDate} from "../utils/functions"
import "../styling/CommentCard.css"

const CommentCard = ({comment}) => {
    return (
        <div className="CommentCard__div">
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Votes: {comment.votes}</p>
            <p>Posted {convertTimeAndDate(comment.created_at)}</p>
        </div>
    );
};

export default CommentCard;