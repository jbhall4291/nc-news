import React from "react";
import { Link } from "react-router-dom";
import "../styling/ArticleCard.css";
import { ThumbsUp } from "phosphor-react";
import "@fortawesome/fontawesome-free/css/all.css";

import { convertTimeAndDate } from "../utils/functions";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <Link
        className="ArticleCard__Link"
        to={`/articles/${article.article_id}`}
      >
        <article className="ArticleCard__article">
          <div class="container">
            <div class="image_area">
              <img src={article.article_img_url} alt={article.title}></img>
            </div>
            <div class="title_area">
              <p>{article.title} </p>
              <p>by {article.author} </p>
            </div>
            <div class="details_area">
              <p>
                <i class="fa-solid fa-clock"></i>{" "}
                <span className="margin-on-mobile">{convertTimeAndDate(article.created_at)}</span>
              </p>

              <p>
                <i class="fa-solid fa-thumbs-up"></i> {article.votes}{" "}
                <span className="hide-on-mobile">votes</span>
              </p>
              <p>
                <i class="fa-solid fa-comment"></i> {article.comment_count}{" "}
                <span className="hide-on-mobile">comments</span>
                
              </p>
            </div>
          </div>

          {/* <div class="container">
            <div class="image_area">
              <img src={article.article_img_url} alt={article.title}></img>
            </div>
            <div class="title">
             
            </div>
            <div>
              <p>Posted {convertTimeAndDate(article.created_at)}</p>

              <p>Votes: {article.votes}</p>
              {localStorage.getItem(article.article_id) ? (
                <ThumbsUp className="ArticleCard__ThumbsUp--active" size={32} />
              ) : (
                <ThumbsUp
                  className="ArticleCard__ThumbsUp--not-active"
                  size={32}
                />
              )}
              <p>Comments: {article.comment_count}</p>
            </div>
          </div> */}

          {/* <p className="ArticleCard__p--title">{article.title} </p>
          <p className="ArticleCard__p--posted-at">Posted {convertTimeAndDate(article.created_at)}</p>
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
          <p>Comments: {article.comment_count}</p> */}
        </article>
      </Link>
    </li>
  );
};

export default ArticleCard;
