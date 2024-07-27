import { fetchMovieById } from "../../moviesApi";
import { Link, Outlet } from "react-router-dom";

import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import css from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const location = useLocation();
  const backLinkHref = location.state ?? "/";
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetchMovieById(movieId);
        console.log(response);
        setMovie(response);
      } catch (er) {
        console.log(er);
      }
    }
    getMovie();
  }, [movieId]);

  const releaseYear = new Date(movie.release_date).getFullYear();
  const popularity = Math.floor(movie.popularity / 100);

  function changeShowValue(whosShow) {
    const currentPath = location.pathname;
    console.log(currentPath);

    if (currentPath.includes(whosShow)) {
      navigate(`/movies/${movieId}`);
    } else {
      navigate(`/movies/${movieId}/${whosShow}`);
    }
  }

  return (
    <main className={css.movieDetails}>
      {movie ? (
        <>
          <Link to={backLinkHref}>Go back</Link>
          <div className={css.movieDetailsContainer}>
            <img
              className={css.movieDetailsImg}
              src={`//image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
            <div className={css.movieDetailsColumn}>
              <h1 className={css.movieDetailsTitle}>
                {movie.title} ({releaseYear})
              </h1>
              <p className={css.movieDetailsText}>User Score: {popularity}%</p>
              <h2 className={css.movieDetailsSubTitle}>Overview</h2>
              <p className={css.movieDetailsText}>{movie.overview}</p>
              <h2 className={css.movieDetailsSubTitle}>Genres</h2>
              <ul className={css.movieDetailsList}>
                {movie.genres && movie.genres.length > 0 ? (
                  movie.genres.map((item) => {
                    return (
                      <li className={css.movieDetailsListItem} key={item.id}>
                        {item.name}
                      </li>
                    );
                  })
                ) : (
                  <p>No genres available</p>
                )}
              </ul>
            </div>
          </div>
          <div className={css.movieDetailsAdditionalInfo}>
            <p className={css.movieDetailsText}>Additional information</p>
            <ul className={css.movieDetailsListInfo}>
              <li>
                <button onClick={() => changeShowValue("cast")}>Cast</button>
              </li>
              <li>
                <button onClick={() => changeShowValue("reviews")}>
                  Reviews
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Outlet />
    </main>
  );
}
