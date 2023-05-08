import React from "react";
import { Link } from "react-router-dom";
import "../styling/ArticleCard.css";
// import { ThumbsUp } from "phosphor-react";
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
              <p>
                <b>{article.title}</b>
                <br></br>
                <em>by {article.author} </em>
              </p>
              <p></p>
            </div>
            <div class="details_area">
              <div class="time_area">
                {" "}
                <p>
                  <i class="fa-solid fa-clock"></i>{" "}
                  <span className="margin-on-mobile">
                    {convertTimeAndDate(article.created_at)}
                  </span>
                </p>
              </div>
              <div class="votes_area">
                <p>
                  <i class="fa-solid fa-thumbs-up"></i> {article.votes}{" "}
                  <span className="hide-on-mobile">votes</span>
                </p>
              </div>
              <div class="comments_area">
                <p>
                  <i class="fa-solid fa-comment"></i> {article.comment_count}{" "}
                  <span className="hide-on-mobile">comments</span>
                </p>
              </div>
            </div>
          </div>

          {/* used to check if this user has voted for this article, on this device
              {localStorage.getItem(article.article_id) ? (
                <ThumbsUp className="ArticleCard__ThumbsUp--active" size={32} />
              ) : (
                <ThumbsUp
                  className="ArticleCard__ThumbsUp--not-active"
                  size={32}
                />


               */}
        </article>
      </Link>
    </li>
  );
};

export default ArticleCard;
