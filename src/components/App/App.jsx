import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Navigation = lazy(() => import("../Navigation/Navigation.jsx"));
const Home = lazy(() => import("../../pages/Home/Home.jsx"));
const Movies = lazy(() => import("../../pages/Movies/Movies.jsx"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound.jsx"));
const MovieDetails = lazy(() =>
  import("../../pages/MovieDetails/MovieDetails.jsx")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews.jsx"));

import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.app}>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
