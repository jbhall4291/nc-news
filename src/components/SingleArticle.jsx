import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
import CommentAdder from "./CommentAdder";
import Comments from "./Comments";
import "../styling/SingleArticle.css";
import { convertTimeAndDate } from "../utils/functions";

import React from "react";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticleData(article);
      setIsLoading(false);
    });
  }, []);

  //   const convertTimeAndDate = (created_at) => {
  //     const date = new Date(created_at);
  //     return `at ${date.toLocaleTimeString()} on ${date.toDateString()}`;
  //   };

  const pluraliseComments = (comment_count) => {
    if (comment_count === 0) return `No comments`;
    else if (comment_count === 1) return `${comment_count} comment`;
    else {
      return `${comment_count} comments`;
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
          <h4 className="SingleArticle__h4">{pluraliseComments(articleData.comment_count)}</h4>
          
          <Comments article_id={article_id} />
        </section>
      )}
    </div>
  );
};

export default SingleArticle;
