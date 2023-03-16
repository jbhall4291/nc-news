import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://backend-project-nc-news-49l4.onrender.com/api",
  });
  

  export const getArticles = () => {
    return newsAPI.get("/articles").then((res) => {
      const articles = res.data.articles;
      return articles;
    });
    
  };


  export const getArticleById = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`).then((res) => {
      const article = res.data.article;
      return article;
    });
    
  };


  export const getArticleComments = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
      const comments = res.data.comments;
      return comments;
    });
    
  };

  export const voteOnArticle = (article_id, body) => {
    return newsAPI.patch(`/articles/${article_id}`, body).then((res) => {
      const response = res.data.updatedArticle;
      console.log(response);
      return response;
    })
    
  };