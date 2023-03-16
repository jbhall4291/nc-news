import { useParams } from "react-router-dom";
import "../styling/Comments.css";
import { useState, useEffect } from "react";
import { getArticleComments } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="Comments__div">
      {isLoading ? (
        <p>loading comments, please wait...</p>
      ) : (
        <>
          <CommentAdder setComments={setComments} article_id={article_id}/>
          <ul className="Comments__ul">
            {comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  setComments={setComments}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Comments;
