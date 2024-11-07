import React from 'react';
import { useSelector } from 'react-redux';
import './NewsList.css';

const NewsList = () => {
  const { news } = useSelector((state) => state.news);

  return (
    <div className="news-list">
      {news.map((item) => (
        <div className="news-item" key={item.objectID}>
          <h2>{item.title}</h2>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
