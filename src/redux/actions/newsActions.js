import axios from 'axios';

export const fetchNews = (query = '', page = 0) => async dispatch => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`);
  dispatch({
    type: 'FETCH_NEWS',
    payload: {
      hits: response.data.hits,
      page: response.data.page,
      query: query
    }
  });
};
