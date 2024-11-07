import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchNews(query, 1, 'all', true));
  };

  return (
    <div className="search-bar">
      <Form.Control
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button onClick={handleSearch}>
        <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
