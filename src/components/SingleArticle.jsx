import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, voteUpArticle, voteDownArticle } from "../utils/api";
import CommentAdder from "./CommentAdder";
import Comments from "./Comments";
import "../styling/SingleArticle.css";
import { convertTimeAndDate } from "../utils/functions";

import React from "react";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userVote, setUserVote] = useState(0);

  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  console.log({ articleData });

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticleData(article);
      setIsLoading(false);
    });
  }, []);

  const pluraliseComments = (comment_count) => {
    if (comment_count === 0) return `No comments`;
    else if (comment_count === 1) return `${comment_count} comment`;
    else {
      return `${comment_count} comments`;
    }
  };

  const voteUp = () => {
    if (!upVoted) {
      setDownVoted(false);
      setUserVote(1);
      setUpVoted(true);
      voteUpArticle(article_id);
    } else if (upVoted) {
      setUserVote(0);
      setUpVoted(false);
      voteDownArticle(article_id);
    }
  };

  const voteDown = () => {
    if (!downVoted) {
      setUpVoted(false);
      setUserVote(-1);
      setDownVoted(true);
      voteDownArticle(article_id);
    } else if (downVoted) {
      setUserVote(0);
      setDownVoted(false);
      voteUpArticle(article_id);
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
            <button
              className={
                upVoted
                  ? "SingleArticle__button--upvote-voted-up"
                  : "SingleArticle__button--upvote-no-vote"
              }
              onClick={voteUp}
            >
              Up Vote
            </button>

            <h4 className="SingleArticle__h4">
              Votes: {articleData.votes + userVote}
            </h4>

            <button
              className={
                downVoted
                  ? "SingleArticle__button--downvote-voted-down"
                  : "SingleArticle__button--downvote-no-vote"
              }
              onClick={voteDown}
            >
              Down Vote
            </button>
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
