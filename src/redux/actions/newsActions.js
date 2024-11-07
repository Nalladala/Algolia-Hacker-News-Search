import axios from 'axios';

// Fetch news items based on a query and filters
export const fetchNews = (query = '', page = 1, filter = 'all', isInitialSearch = false, hitsPerPage = 8) => async dispatch => {
  let baseUrl = `https://hn.algolia.com/api/v1/search_by_date`;

  // Append the appropriate endpoint for each filter
  if (isInitialSearch || filter === 'all') {
    baseUrl += `?query=${query}&page=${page - 1}&hitsPerPage=${hitsPerPage}`;
  } else {
    switch (filter) {
      case 'story':
        baseUrl += `?tags=story`;
        break;
      case 'comment':
        baseUrl += `?tags=comment`;
        break;
      case 'ask_hn':
        baseUrl += `?tags=ask_hn`;
        break;
      case 'show_hn':
        baseUrl += `?tags=show_hn`;
        break;
      case 'job':
        baseUrl += `?tags=job`;
        break;
      default:
        baseUrl += `?tags=story,comment,ask_hn,show_hn,job`;
    }
    baseUrl += `&query=${query}&page=${page - 1}&hitsPerPage=${hitsPerPage}`;
  }

  try {
    const response = await axios.get(baseUrl);
    dispatch({
      type: 'FETCH_NEWS',
      payload: {
        hits: response.data.hits,
        page: response.data.page + 1,
        totalPages: response.data.nbPages,
        query: query,
        filter: filter
      }
    });
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};

// Fetch the details of a specific news item by its ID
export const fetchNewsItem = (id) => async dispatch => {
  const baseUrl = `https://hn.algolia.com/api/v1/items/${id}`;

  try {
    const response = await axios.get(baseUrl);
    dispatch({
      type: 'FETCH_NEWS_ITEM',
      payload: response.data
    });
  } catch (error) {
    console.error('Error fetching news item:', error);
  }
};
