import { fetchMovieById } from "../../moviesApi";
import { Link, Outlet } from "react-router-dom";

import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/");

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

  return (
    <main className={css.movieDetails}>
      {movie ? (
        <>
          <Link to={backLinkHref.current}>Go back</Link>
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
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
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
