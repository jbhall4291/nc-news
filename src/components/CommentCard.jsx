import React from 'react';

const CommentCard = ({comment}) => {
    return (
        <div>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>Votes: {comment.votes}</p>
            <p>Posted: {comment.votes}</p>
        </div>
    );
};

export default CommentCard;