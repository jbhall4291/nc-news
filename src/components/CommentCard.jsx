import React from 'react';
import {convertTimeAndDate} from "../utils/functions"
import "../styling/CommentCard.css"
import { Quotes } from 'phosphor-react';

const CommentCard = ({comment}) => {
    return (
        <div className="CommentCard__div">
            <Quotes size={20} mirrored={true}/>
            {comment.body}
            <Quotes size={20}/>
            <p>Author: {comment.author}</p>
            <p>Votes: {comment.votes}</p>
            <p className="CommentCard__p--posted">Posted {convertTimeAndDate(comment.created_at)}</p>
        </div>
    );
};

export default CommentCard;