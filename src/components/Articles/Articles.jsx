import React, { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../../utils/api";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Articles.css";
import { useParams } from "react-router-dom";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [articles, setArticles] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");

  const { topic } = useParams();

  useEffect(() => {
    setErr(false);
    setIsLoading(true);
    getArticles(topic, selectedSortBy, selectedOrder)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setIsLoading(false);
      });
  }, [topic, selectedSortBy, selectedOrder]);

  if (isLoading)
    return (
      <>
        <p>loading articles, please wait...</p>
        <ActivityIndicator />
      </>
    );
  if (err)
    return (
      <section className="Articles__section--error">
        <p>no articles found</p>
      </section>
    );

  return (
    <section className="Articles__section">
      <div className="Articles__div--filter">
        <select
          value={selectedSortBy}
          onChange={(e) => setSelectedSortBy(e.target.value)}
        >
          <option value="created_at">Recent</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <select
          value={selectedOrder}
          onChange={(e) => setSelectedOrder(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
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
    </section>
  );
};

export default Articles;
