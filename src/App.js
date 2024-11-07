import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './pages/Dashboard';
import NewsItemDetails from './components/NewsItemDetails';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/item/:id" element={<NewsItemDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
