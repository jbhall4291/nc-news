import React, { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "./Articles.css"

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // go get the articles
    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>loading articles, please wait...</p>
      ) : (
        <ul>
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
                setArticles={setArticles}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Articles;
