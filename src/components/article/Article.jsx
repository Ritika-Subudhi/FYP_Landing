import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="fyp__tm-container_article">
    <div className="fyp__tm-container_article-image">
      <img src={imgUrl} alt="tm_image" />
    </div>
    <div className="fyp__tm-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

export default Article;
