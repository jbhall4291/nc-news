import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { convertTimeAndDate } from "../../utils/functions";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <Link
        className="ArticleCard__Link"
        to={`/articles/${article.article_id}`}
      >
        <article>
          <div className="Article__div--container">
            <div className="Article__div--image-area">
              <img src={article.article_img_url} alt={article.title}></img>
            </div>
            <div className="Article__div--title-area">
              <p>
                <b>{article.title}</b>
                <br></br>
                <em>by {article.author} </em>
              </p>
              <p></p>
            </div>
            <div className="Article__div--details-area">
              <div className="Article__div--time-area">
                {" "}
                <p>
                  <i className="fa-solid fa-clock"></i>{" "}
                  <span>{convertTimeAndDate(article.created_at)}</span>
                </p>
              </div>
              <div className="Article__div--votes-area">
                <p>
                  {localStorage.getItem(article.article_id) ? (
                    <i className="fa-solid fa-thumbs-up ArticleCard__i--voted">
                      {" "}
                    </i>
                  ) : (
                    <i className="fa-solid fa-thumbs-up"> </i>
                  )}
                  {article.votes} <span className="hide-on-mobile"> votes</span>
                </p>
              </div>
              <div className="Article__div--comments-area">
                <p>
                  <i className="fa-solid fa-comment"></i>{" "}
                  {article.comment_count} <span>comments</span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default ArticleCard;
