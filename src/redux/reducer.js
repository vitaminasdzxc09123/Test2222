import ACTION_TYPES from './types';

const initialState = {
  loading: false,
  movies: [],
  error: '',
  token: '',
};

const apiReducer = (state = initialState, action) => {
  const {payload} = action;
  console.log(payload);
  switch (action.type) {
    case ACTION_TYPES.API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case ACTION_TYPES.SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case ACTION_TYPES.DELETE_MOVIE:
      return {
        ...state,
        movies: [...state.movies.filter(el => el.id !== payload)],
      };
    case ACTION_TYPES.API_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case ACTION_TYPES.API_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default apiReducer;
