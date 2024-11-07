import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsItem } from '../redux/actions/newsActions';
import './NewsItemDetails.css';

const NewsItemDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { newsItem } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNewsItem(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div className="news-item-details">
      <h2>{newsItem.title}</h2>
      <p>{newsItem.text}</p>
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsItemDetails;
