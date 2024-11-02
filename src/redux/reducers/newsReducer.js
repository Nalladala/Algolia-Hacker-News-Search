const initialState = {
    news: [],
    page: 0,
    query: ''
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_NEWS':
        return {
          ...state,
          news: action.payload.hits,
          page: action.payload.page,
          query: action.payload.query
        };
      default:
        return state;
    }
  };
  
  export default newsReducer;
  