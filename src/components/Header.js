import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';

const Header = ({ username }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://i.pinimg.com/originals/26/d0/2f/26d02f43993c1983e294a2b6ded39d22.png" alt="Logo" className="logo" />
        <h1 className="welcome-message">{`Welcome, ${username}`}</h1>
      </div>
      <div className="header-center">
        <SearchBar />
      </div>
      
    </header>
  );
};

export default Header;
