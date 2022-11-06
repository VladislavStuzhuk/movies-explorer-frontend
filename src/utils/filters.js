import { SHORT_MOVIE_DURATION } from './constants'
export const filterMovies = (searchQuery, moviesArray) => {
  return moviesArray.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const filterOnlyShortMovies =  (searchQuery, moviesArray) => {
  return moviesArray.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) && movie.duration < SHORT_MOVIE_DURATION);
};