import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchInputMovies } from "../../moviesApi";

import css from "./Movies.module.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [seaechParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    async function getMovie() {
      const response = await fetchInputMovies(inputValue);
      return response;
    }
    getMovie()
      .then((response) => {
        console.log(response);
        setMovies(response);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("final");
      });
  }, [inputValue]);

  const handleSubmit = (value) => {
    setInputValue(value);
    setSearchParams({ query: value });
  };

  return (
    <div className={css.movies}>
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movieList={movies} />
    </div>
  );
}
