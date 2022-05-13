import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { fetchPopular } from "../utility/Api";
import s from "./HomePage.module.css";

export default function HomePage() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchPopular().then((e) => {
      setMoviesTrending(e.results);
    });
  }, []);

  return (
    <div className={s.div}>
      <h2 className={s.title}>Trending today</h2>
      {moviesTrending && (
        <ul className={s.list}>
          {moviesTrending.map(({ id, title, name }) => {
            return (
              <li key={id} className={s.item}>
                <Link
                  className={s.link}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {title ? title : name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
