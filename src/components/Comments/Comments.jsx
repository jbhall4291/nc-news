import { useParams } from "react-router-dom";
import "./Comments.css";
import { useState, useEffect } from "react";
import { getArticleComments } from "../../utils/api";
import CommentCard from "../CommentCard/CommentCard";
import CommentAdder from "../CommentAdder/CommentAdder";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

const Comments = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleComments(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div className="Comments__div">
      <CommentAdder
        setComments={setComments}
        article_id={article_id}
        loggedInUser={props.loggedInUser}
      />

      {isLoading ? (
        <>
          <p>loading comments, please wait...</p>
          <ActivityIndicator />
        </>
      ) : (
        <>
          {comments.length === 0 ? (
            <p>no comments yet!</p>
          ) : (
            <ul className="Comments__ul">
              {comments.map((comment) => {
                return (
                  <CommentCard
                    key={comment.comment_id}
                    comment={comment}
                    comments={comments}
                    setComments={setComments}
                    loggedInUser={props.loggedInUser}
                  />
                );
              })}
            </ul>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Comments;
