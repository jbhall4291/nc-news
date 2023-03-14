import React from "react";
import "../styling/ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <article className="ArticleCard__article">
        <p>{article.title} </p>

        <img
          className="ArticleCard__img"
          src={article.article_img_url}
          alt={article.title}
        ></img>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </article>
    </li>
  );
};

export default ArticleCard;
