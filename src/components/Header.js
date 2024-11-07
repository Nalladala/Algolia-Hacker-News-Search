import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';

const Header = ({ username }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="welcome-message">{`Welcome, ${username}`}</h1>
      </div>
      <div className="header-center">
        <SearchBar />
      </div>
      
    </header>
  );
};

export default Header;
