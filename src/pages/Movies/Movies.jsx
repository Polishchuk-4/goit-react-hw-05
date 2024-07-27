import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchInputMovies } from "../../moviesApi";

import css from "./Movies.module.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    async function getMovie() {
      const response = await fetchInputMovies(query);
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
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div className={css.movies}>
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movieList={movies} />
    </div>
  );
}
