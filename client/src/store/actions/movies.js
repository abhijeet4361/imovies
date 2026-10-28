import { GET_MOVIES, SELECT_MOVIE, GET_SUGGESTIONS } from '../types';
import { setAlert } from './alert';
import { mockMovies } from '../../data/mockData';

export const uploadMovieImage = (id, image) => async dispatch => {
  try {
    const data = new FormData();
    data.append('file', image);
    const url = '/movies/photo/' + id;
    const response = await fetch(url, {
      method: 'POST',
      body: data
    });
    const responseData = await response.json();
    if (response.ok) {
      dispatch(setAlert('Image Uploaded', 'success', 5000));
    }
    if (responseData.error) {
      dispatch(setAlert(responseData.error.message, 'error', 5000));
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const getMovies = () => async dispatch => {
  try {
    const url = '/movies';
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const movies = await response.json();
    if (response.ok && Array.isArray(movies) && movies.length) {
      dispatch({ type: GET_MOVIES, payload: movies });
    } else {
      dispatch({ type: GET_MOVIES, payload: mockMovies });
    }
  } catch (error) {
    dispatch({ type: GET_MOVIES, payload: mockMovies });
  }
};

export const onSelectMovie = movie => ({
  type: SELECT_MOVIE,
  payload: movie
});

export const getMovie = id => async dispatch => {
  try {
    const url = '/movies/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const movie = await response.json();
    if (response.ok && movie && movie.title) {
      dispatch({ type: SELECT_MOVIE, payload: movie });
    } else {
      const fallback = mockMovies.find(m => m._id === id) || mockMovies[0];
      dispatch({ type: SELECT_MOVIE, payload: fallback });
    }
  } catch (error) {
    const fallback = mockMovies.find(m => m._id === id) || mockMovies[0];
    dispatch({ type: SELECT_MOVIE, payload: fallback });
  }
};

export const getMovieSuggestion = id => async dispatch => {
  try {
    const url = '/movies/usermodeling/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const movies = await response.json();
    if (response.ok && Array.isArray(movies) && movies.length) {
      dispatch({ type: GET_SUGGESTIONS, payload: movies });
    } else {
      dispatch({ type: GET_SUGGESTIONS, payload: mockMovies.slice(0, 4) });
    }
  } catch (error) {
    dispatch({ type: GET_SUGGESTIONS, payload: mockMovies.slice(0, 4) });
  }
};

export const addMovie = (image, newMovie) => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/movies';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    });
    const movie = await response.json();
    if (response.ok) {
      dispatch(setAlert('Movie have been saved!', 'success', 5000));
      if (image) dispatch(uploadMovieImage(movie._id, image));
      dispatch(getMovies());
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const updateMovie = (movieId, movie, image) => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/movies/' + movieId;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
    if (response.ok) {
      dispatch(onSelectMovie(null));
      dispatch(setAlert('Movie have been saved!', 'success', 5000));
      if (image) dispatch(uploadMovieImage(movieId, image));
      dispatch(getMovies());
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const removeMovie = movieId => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/movies/' + movieId;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      dispatch(getMovies());
      dispatch(onSelectMovie(null));
      dispatch(setAlert('Movie have been Deleted!', 'success', 5000));
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};
