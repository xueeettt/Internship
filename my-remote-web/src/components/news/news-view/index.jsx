import React from "react";
import "./style.less";

const NewsView = (props) => {
  const news = props.data;

  const handleOnClick = () => {
    window.location.href = news.link;
  }

  console.log(news);
  return (
    <div className="news-item-container" onClick={handleOnClick}>
      <h2>{news.name}</h2>
      <img src={news.imagePath} alt={news.name} className="news-img"/>
      <div className="news-content">{news.content}</div>
    </div>
  )
}

export default NewsView; 