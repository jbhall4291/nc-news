import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://backend-project-nc-news-49l4.onrender.com/api",
  });
  

  export const getArticles = () => {
    return newsAPI.get("/articles").then((res) => {
      const articles = res.data.articles;
      return articles;
    });
    // .catch(error)
  };


  export const getArticleById = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`).then((res) => {
      const articles = res.data.article;
      console.log(articles)
      return articles;
    });
    // .catch(error)
  };