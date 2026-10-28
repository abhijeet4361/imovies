import { GET_CINEMAS, GET_CINEMA } from '../types';
import { mockCinemas } from '../../data/mockData';

const initialState = {
  cinemas: mockCinemas,
  selectedCinema: mockCinemas[0]
};

const getCinemas = (state, payload) => ({
  ...state,
  cinemas: payload && payload.length ? payload : mockCinemas
});

const getCinema = (state, payload) => ({
  ...state,
  selectedCinema: payload || mockCinemas[0]
});

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CINEMAS:
      return getCinemas(state, payload);
    case GET_CINEMA:
      return getCinema(state, payload);
    default:
      return state;
  }
};
