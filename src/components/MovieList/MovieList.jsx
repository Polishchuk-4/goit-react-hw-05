import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

export default function MovieList({ movieList }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movieList.map((item) => {
        return (
          <li key={item.id} className={css.movieListItemContainer}>
            <Link
              to={`/movies/${item.id}`}
              state={location}
              className={css.movieListLink}
            >
              <h2 className={css.movieListTitle}>{item.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
