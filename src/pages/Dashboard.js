import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Filters from '../components/Filters';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  if (!username) {
    navigate('/');
    return null;
  }

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
