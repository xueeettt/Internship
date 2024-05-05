import React, { useEffect, useState } from "react";
import "./style.less";
import api from "../../api";
import NewsView from "./news-view";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const itemsPerPage = windowWidth < 768 ? 1 : 3;
  const maxPage = Math.ceil(newsList.length / itemsPerPage) - 1;

  useEffect(() => {
    api.getNews().then(res => {
      if (res.status === 200) {
        setNewsList(res.data);
      }
      console.log(res.data);
    });
  }, []);

  const nextPage = () => {
    setPageIndex(prev => Math.min(prev + 1, maxPage));
  }

  const prevPage = () => {
    setPageIndex(prev => Math.max(prev - 1, 0));
  }

  return (
    <div className="news-container"> 
      <h1>Latest News</h1>
      <div className="news-wrapper">
        <button onClick={prevPage} disabled={pageIndex <= 0} className="button-news">&lt;</button>
        <div className="news-grid">
          {newsList.slice(pageIndex, pageIndex + itemsPerPage).map(newsItem => (
            <NewsView key={newsItem.name} data={newsItem} />
          ))}
        </div>
        <button onClick={nextPage} disabled={pageIndex >= maxPage} className="button-news">&gt;</button>
      </div>
    </div>
  )
}

export default News;