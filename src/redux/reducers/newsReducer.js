const initialState = {
  news: [],
  newsItem: {},
  page: 1,
  totalPages: 0,
  query: '',
  filter: 'all'
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS':
      return {
        ...state,
        news: action.payload.hits,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        query: action.payload.query,
        filter: action.payload.filter
      };
    case 'FETCH_NEWS_ITEM':
      return {
        ...state,
        newsItem: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
