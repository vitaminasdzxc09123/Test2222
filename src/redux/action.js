import ACTION_TYPES from './types';

export const fetchData = () => ({
  type: ACTION_TYPES.API_PENDING,
});

export const fetchSuccess = data => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data,
});

export const setToken = data => ({
  type: ACTION_TYPES.SET_TOKEN,
  payload: data,
});

export const setMovies = data => ({
  type: ACTION_TYPES.SET_MOVIES,
  payload: data,
});

export const deleteMovie = data => ({
  type: ACTION_TYPES.DELETE_MOVIE,
  payload: data,
});

export const fetchError = error => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error,
});
