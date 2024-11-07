import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import './Pagination.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const { query, page, totalPages, filter } = useSelector((state) => state.news);

  const handlePageClick = (pageNumber) => {
    dispatch(fetchNews(query, pageNumber, filter));
  };

  const handlePrevious = () => {
    if (page > 1) {
      dispatch(fetchNews(query, page - 1, filter));
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(fetchNews(query, page + 1, filter));
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li className={`page-item ${i === page ? 'active' : ''}`} key={i}>
          <button className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
          <button className="page-link" aria-label="Previous" onClick={handlePrevious}>
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" aria-label="Next" onClick={handleNext}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
