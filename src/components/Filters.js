import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import './Filters.css';
import { FaFilter } from 'react-icons/fa';

const Filters = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.news);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterClick = (filter) => {
    dispatch(fetchNews(query, 1, filter, false, 8));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="filters-container">
      <button className="filter-toggle-button" onClick={toggleFilters}>
        <FaFilter /> Filters
      </button>
      {showFilters && (
        <div className="filters">
          <div className="filter-group">
            <button className="filter-button" onClick={() => handleFilterClick('all')}>All</button>
            <button className="filter-button" onClick={() => handleFilterClick('story')}>Stories</button>
            <button className="filter-button" onClick={() => handleFilterClick('comment')}>Comments</button>
            <button className="filter-button" onClick={() => handleFilterClick('ask_hn')}>Ask HN</button>
            <button className="filter-button" onClick={() => handleFilterClick('show_hn')}>Show HN</button>
            <button className="filter-button" onClick={() => handleFilterClick('job')}>Jobs</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
