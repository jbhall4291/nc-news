import React from "react";
import { Link } from "react-router-dom";
import "../styling/ArticleCard.css";
import { ThumbsUp, ThumbsDown } from "phosphor-react";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <Link
        className="ArticleCard__link"
        to={`/articles/${article.article_id}`}
      >
        <article className="ArticleCard__article">

          <p>{article.title} </p>

          <img
            className="ArticleCard__img"
            src={article.article_img_url}
            alt={article.title}
          ></img>
          <p>Votes: {article.votes}</p>


          {localStorage.getItem(article.article_id) ? (
            <ThumbsUp className="ArticleCard__ThumbsUp--active" size={32} />
          ) : (
            <ThumbsUp className="ArticleCard__ThumbsUp--not-active" size={32} />
          )}


          
          <p>Comments: {article.comment_count}</p>
        </article>
      </Link>
    </li>
  );
};

export default ArticleCard;
