import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams, useLocation, Link } from "react-router-dom";
import { fetchDetails } from "../utility/Api";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);

  const location = useLocation();

  const backURL = location?.state?.from ?? "/";

  useEffect(() => {
    fetchDetails(movieId).then(setMovieData);
  }, [movieId]);

  const {
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    genres,
  } = movieData;
  return (
    <>
      <Link to={backURL} className={s.back}>
        Back
      </Link>
      {movieData && (
        <>
          <div className={s.div}>
            <div>
              <img
                src={
                  poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
                }
                alt="movie poster"
                width={150}
                className={s.img}
              />
            </div>

            <div className={s.divText}>
              <div className={s.container}>
                <h2 className={s.title}>
                  {original_title}
                  {release_date
                    ? `(${new Date(Date.parse(release_date)).getFullYear()})`
                    : null}
                </h2>
                <p className={s.text}>User Score: {vote_average}</p>
              </div>

              <div className={s.container}>
                <h3 className={s.subtitle}>Overview</h3>
                <p className={s.text}>{overview}</p>
              </div>

              <div className={s.container}>
                <h3 className={s.subtitle}>Genres</h3>
                <ul className={s.list}>
                  {" "}
                  {genres &&
                    genres.map(({ id, name }) => {
                      return (
                        <li key={id} className={s.item}>
                          {name}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className={s.divInfo}>
            <p className={s.textInfo}>Additional information</p>
            <ul className={s.listInfo}>
              <li className={s.itemInfo}>
                <Link
                  to="cast"
                  state={{ from: backURL }}
                  className={s.linkInfo}
                >
                  Cast
                </Link>
              </li>
              <li className={s.itemInfo}>
                <Link
                  to="reviews"
                  state={{ from: backURL }}
                  className={s.linkInfo}
                >
                  Review
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
