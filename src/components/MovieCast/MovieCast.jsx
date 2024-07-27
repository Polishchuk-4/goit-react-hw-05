import { useEffect, useState } from "react";
import { fetchCastMovie } from "../../moviesApi";
import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const responce = await fetchCastMovie(movieId);
        console.log(responce);
        setCast(responce);
      } catch (e) {
        console.log(e);
      }
    }
    getCast();
  }, []);
  return (
    <ul className={css.movieCastList}>
      {cast.map((item, index) => {
        return (
          <li key={index} className={css.movieCastListItem}>
            <img
              className={css.movieCastImg}
              src={`//image.tmdb.org/t/p/w200${item.profile_path}`}
            />
            <p className={css.movieCastText}>{item.name}</p>
            <p className={css.movieCastText}>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
