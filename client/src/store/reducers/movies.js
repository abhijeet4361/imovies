import { GET_MOVIES, SELECT_MOVIE, GET_SUGGESTIONS } from '../types';
import { mockMovies } from '../../data/mockData';

const initialNowShowing = mockMovies.filter(
  movie =>
    new Date(movie.endDate) >= new Date() &&
    new Date(movie.releaseDate) < new Date()
);

const initialComingSoon = mockMovies.filter(
  movie => new Date(movie.releaseDate) > new Date()
);

const initialState = {
  movies: mockMovies,
  randomMovie: mockMovies[0],
  latestMovies: mockMovies.slice(0, 5),
  nowShowing: initialNowShowing.length ? initialNowShowing : mockMovies.slice(0, 4),
  comingSoon: initialComingSoon.length ? initialComingSoon : mockMovies.slice(4, 8),
  selectedMovie: mockMovies[0],
  suggested: mockMovies.slice(0, 4)
};

const getMovies = (state, payload) => {
  const movieList = payload && payload.length ? payload : mockMovies;

  const latestMovies = [...movieList]
    .sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate))
    .slice(0, 5);

  let nowShowing = movieList.filter(
    movie =>
      new Date(movie.endDate) >= new Date() &&
      new Date(movie.releaseDate) < new Date()
  );

  let comingSoon = movieList.filter(
    movie => new Date(movie.releaseDate) > new Date()
  );

  if (!nowShowing.length) {
    nowShowing = movieList.slice(0, 4);
  }

  if (!comingSoon.length) {
    comingSoon = movieList.slice(4, 8).length ? movieList.slice(4, 8) : movieList.slice(0, 4);
  }

  return {
    ...state,
    movies: movieList,
    randomMovie: movieList[Math.floor(Math.random() * movieList.length)] || movieList[0],
    latestMovies,
    nowShowing,
    comingSoon,
    suggested: state.suggested && state.suggested.length ? state.suggested : movieList.slice(0, 4)
  };
};

const onSelectMovie = (state, payload) => ({
  ...state,
  selectedMovie: payload
});

const getMovieSuggestions = (state, payload) =>({
  ...state,
  suggested: payload
})

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return getMovies(state, payload);
    case SELECT_MOVIE:
      return onSelectMovie(state, payload);
    case GET_SUGGESTIONS:
      return getMovieSuggestions(state, payload);
    default:
      return state;
  }
};
