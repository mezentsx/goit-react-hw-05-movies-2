import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchMovie } from "../utility/Api";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movieData, setMovieData] = useState(null);
  const [request, setRequest] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const searchQuery = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!searchQuery) return;
    fetchMovie(searchQuery).then((data) => {
      setMovieData(data.results);
    });
  }, [searchQuery]);

  let setSearch = (request) => {
    navigate({ ...location, search: `query=${request}` });
  };

  const handleInput = (e) => {
    setRequest(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequest(request.trim());

    if (request === "") {
      alert("Enter some kind of request");
      return;
    }

    setSearch(request);
    setRequest("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          name="search"
          onChange={handleInput}
          // pattern="[A-Za-zА-Яа-яЁё]{1,}"
          pattern="[^\s]+"
        ></input>
        <button className={s.button} type="submit">
          Search
        </button>
      </form>

      {movieData && (
        <ul className={s.list}>
          {movieData.map(({ id, original_title }) => {
            return (
              <li key={id} className={s.item}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={s.link}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
