import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';


const Dashboard = () => {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Filters/>
            <NewsList/>
            <Pagination/>
            
        </div>
    );
};

export default Dashboard;