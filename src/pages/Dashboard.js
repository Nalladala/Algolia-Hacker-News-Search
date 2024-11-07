import React from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';
import './Dashboard.css';

const Dashboard = () => {
  const username = localStorage.getItem('username');

  return (
    <div className="dashboard">
      <Header username={username} />
      <main>
        <Filters />
        <NewsList />
        <Pagination />
      </main>
    </div>
  );
};

export default Dashboard;
