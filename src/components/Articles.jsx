import React, { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "../styling/Articles.css";
import { useParams } from "react-router-dom";

const Articles = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  
  const {topic} = useParams();


  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topic]);



  return (
    <div>
      {isLoading ? (
        <p>loading articles, please wait...</p>
      ) : (
        <ul className="Articles__ul">
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
