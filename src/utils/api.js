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
      const article = res.data.article;
      return article;
    });
    // .catch(error)
  };


  export const getArticleComments = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
      const comments = res.data.comments;
      return comments;
    });
    // .catch(error)
  };

  export const voteUpArticle = (article_id) => {
    return newsAPI.patch(`/articles/${article_id}`, {inc_votes: 1}).then((res) => {
      const response = res.data.updatedArticle;
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.message)
    })
  };

  export const voteDownArticle = (article_id) => {
    return newsAPI.patch(`/articles/${article_id}`, {inc_votes: -1}).then((res) => {
      const response = res.data.updatedArticle;
      console.log(response);
      return response;
    });
    // .catch(error)
  };