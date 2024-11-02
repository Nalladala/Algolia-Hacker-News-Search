import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchNews } from '../redux/actions/newsActions';
import './Header.css';
import { Form, Button } from 'react-bootstrap';

const Header = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleSearch = () => {
    dispatch(fetchNews(query));
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <header className="header">
      <h1>{`Welcome, ${username}`}</h1>
      <div className="search-bar-container">
        <Form className="search-bar">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button onClick={handleSearch}>Search</Button>
        </Form>
        <Button onClick={handleLogout} className="logout-button">Logout</Button>
      </div>
    </header>
  );
};

export default Header;
