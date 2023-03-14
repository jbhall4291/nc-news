import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
import "../styling/SingleArticle.css";

import React from "react";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [articleData, setArticleData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((item) => {
      setArticleData(item);
      setIsLoading(false);
    });
  }, []);

  const convertTimeAndDate = (created_at) => {
    const date = new Date(created_at);
    return `at ${date.toLocaleTimeString()} on ${date.toDateString()}`;
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
          <time></time>

          <h5 className="SingleArticle__h5">
            Posted {convertTimeAndDate(articleData.created_at)}
          </h5>
          <img
            className="SingleArticle__img"
            src={articleData.article_img_url}
            alt={articleData.title}
          ></img>
          <h4>{articleData.body}</h4>
          <h4>{articleData.comment_count} comments</h4>
        </section>
      )}
    </div>
  );
};

export default SingleArticle;
