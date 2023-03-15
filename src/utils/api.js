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
      console.log(comments)
      return comments;
    });
    // .catch(error)
  };

  export const postComment = (article_id, finalisedComment) => {
    const commentObject = {
      //need to hardcode an existing user in db
      username: "cooljmessy",
      body: finalisedComment
    }

    console.log(JSON.stringify(commentObject) + " <<< commentObject before sending");

    return newsAPI.post(`/articles/${article_id}/comments`, commentObject).then((res) => {
      const commentInserted = res.data.commentInserted;
      console.log(JSON.stringify(res.data.commentInserted) + " <<<< response")
      return commentInserted;
    });
    // .catch(error)
  }