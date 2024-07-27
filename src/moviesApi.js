import axios from "axios";

const key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjdjNzg3YTRmMGMwZmIwOTY3YTg0Mzc4YWU5OTg0YyIsIm5iZiI6MTcyMTkzOTczNy42MDQyMTcsInN1YiI6IjY2YTJhOGFmNjc1OGY1MWU5ZjgwZjQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h79wcMAjDCp815pzUKRnQjGv3dmEMAi27WsbbBoWenA";

const options = {
  headers: {
    Authorization: `Bearer ${key}`,
  },
};

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = await axios.get(url, options);
  return response.data.results;
};
export const fetchMovieById = async (id) => {
  const urlById = `https://api.themoviedb.org/3/movie/${id}&language=en-US`;
  const response = await axios.get(urlById, options);
  return response.data;
};
export const fetchInputMovies = async (query) => {
  const urlQuery = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(urlQuery, options);
  return response.data.results;
};
