import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, voteOnArticle } from "../utils/api";
import CommentAdder from "./CommentAdder";
import Comments from "./Comments";
import "../styling/SingleArticle.css";
import { convertTimeAndDate } from "../utils/functions";
import { ThumbsUp, ThumbsDown } from "phosphor-react";

import React from "react";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [votes, setVotes] = useState(0);
  const [isVotingError, setIsVotingError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticleData(article);
      setVotes(article.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const pluraliseComments = (comment_count) => {
    if (comment_count === 0) return `No comments`;
    else if (comment_count === 1) return `${comment_count} comment`;
    else {
      return `${comment_count} comments`;
    }
  };

  const updateVotes = (vote) => {
    if (localStorage.getItem(article_id)) {
      localStorage.removeItem(article_id, "userHasVoted");
      setIsVotingError(false);

      setVotes(votes - 1);

      voteOnArticle(article_id, { inc_votes: vote }).catch(() => {
        setIsVotingError(true);
        setVotes((currentVotes) => currentVotes + vote);
        localStorage.setItem(article_id, "userHasVoted");
      });
    } else {
      localStorage.setItem(article_id, "userHasVoted");
      setIsVotingError(false);

      setVotes((currentVotes) => currentVotes + vote);
      voteOnArticle(article_id, { inc_votes: vote }).catch(() => {
        setIsVotingError(true);
        setVotes((currentVotes) => currentVotes - vote);
        localStorage.removeItem(article_id, "userHasVoted");
      });
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>loading article, please wait...</p>
      ) : (
        <section className="SingleArticle__section">
          <h3 className="SingleArticle__h3">{articleData.title}</h3>
          <h4 className="SingleArticle__h4">
            by {articleData.author} posted in {articleData.topic}
          </h4>

          <h5 className="SingleArticle__h5">
            Posted {convertTimeAndDate(articleData.created_at)}
          </h5>
          <img
            className="SingleArticle__img"
            src={articleData.article_img_url}
            alt={articleData.title}
          ></img>
          <h4 className="SingleArticle__h4">{articleData.body}</h4>
          <div>
            {localStorage.getItem(article_id) ? (
              <button
                className="SingleArticle__button--upvote-voted-up"
                onClick={() => updateVotes(-1)}
                
              >
                <ThumbsUp size={32} />
                
              </button>
            ) : (
              <button
                className="SingleArticle__button--upvote-no-vote"
                onClick={() => updateVotes(1)}
              >
                <ThumbsUp size={32} />
                
              </button>
            )}

            {isVotingError ? (
              <h4 className="SingleArticle__h4--error">
                Error Voting: Check Internet Connection
              </h4>
            ) : (
              <h4 className="SingleArticle__h4">Votes: {votes}</h4>
            )}

           
          </div>

          <h4 className="SingleArticle__h4">
            {pluraliseComments(articleData.comment_count)}
          </h4>
          <CommentAdder />
          <Comments article_id={article_id} />
        </section>
      )}
    </div>
  );
};

export default SingleArticle;
