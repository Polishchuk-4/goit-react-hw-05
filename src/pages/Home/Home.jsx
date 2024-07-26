import MovieList from "../../components/MovieList/MovieList";
import Title from "../../components/Title/Title";

import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../moviesApi";

import css from "./Home.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response);
        console.log(response);
      } catch (er) {
        console.log(er);
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div className={css.home}>
      <Title />
      <MovieList movieList={movies} />
    </div>
  );
}
