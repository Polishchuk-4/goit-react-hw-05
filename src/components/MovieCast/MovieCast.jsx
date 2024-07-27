import { useEffect, useState } from "react";
import { fetchCastMovie } from "../../moviesApi";
import css from "./MovieCast.module.css";

export default function MovieCast({ castId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const responce = await fetchCastMovie(castId);
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
