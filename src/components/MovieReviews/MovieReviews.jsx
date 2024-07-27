import { fetchReviewsMovie } from "../../moviesApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./MovieReviews.module.css";

export default function MovieReviews({ reviewsId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetchReviewsMovie(movieId);
        setReviews(response);
        console.log(response);
        if (response.length > 0) {
          setLoading(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getReviews();
  }, []);
  return (
    <ul className={css.movieReviewsList}>
      {loading ? (
        reviews.map((item) => {
          return (
            <li className={css.movieReviewsListItem} key={item.id}>
              <h2 className={css.movieReviewsListTitle}>
                Author: {item.author}
              </h2>
              <p className={css.movieReviewsListText}>{item.content}</p>
            </li>
          );
        })
      ) : (
        <p>We dont have any reviews for this movies</p>
      )}
    </ul>
  );
}
