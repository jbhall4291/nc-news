import React, {useState} from 'react';
import "./AddArticle.css"

function AddArticle(props) {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [topic, setTopic] = useState('');
    const [articleImgUrl, setArticleImgUrl] = useState('');
    const immutableString = 'This string cannot be changed';
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      // You can access the form inputs using the state variables (author, title, body, topic, articleImgUrl)
    };


    return (
        <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input type="text" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="articleImgUrl">Article Image URL:</label>
          <input type="text" id="articleImgUrl" value={articleImgUrl} onChange={(e) => setArticleImgUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Immutable String:</label>
          <span>{immutableString}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>


    );
}

export default AddArticle;