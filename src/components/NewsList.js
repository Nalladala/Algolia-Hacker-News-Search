import React from 'react';
import { useSelector } from 'react-redux';
import './NewsList.css';

const NewsList = () => {
  const news = useSelector(state => state.news.news);

  return (
    <div className="news-list">
      <ul>
        {news.map(item => (
          <li key={item.objectID}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
