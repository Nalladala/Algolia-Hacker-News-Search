

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import { Button, Container } from 'react-bootstrap';

const Pagination = () => {
  const dispatch = useDispatch();
  const { query, page } = useSelector(state => state.news);

  const handleNext = () => {
    dispatch(fetchNews(query, page + 1));
  };

  const handlePrevious = () => {
    dispatch(fetchNews(query, page - 1));
  };

  return (
    <Container className="d-flex justify-content-between pagination-container">
      <Button variant="primary" onClick={handlePrevious} disabled={page <= 0}>Previous</Button>
      <Button variant="primary" onClick={handleNext}>Next</Button>
    </Container>
  );
};

export default Pagination;
