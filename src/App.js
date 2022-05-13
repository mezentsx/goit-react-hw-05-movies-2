import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar";

const HomePage = lazy(() =>
  import("./components/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() => import("./components/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./components/MovieDetailsPage"));
const Cast = lazy(() => import("./components/Cast"));
const Reviews = lazy(() => import("./components/Reviews"));
const NotFoundView = lazy(() => import("./components/NotFoundView"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  );
}
