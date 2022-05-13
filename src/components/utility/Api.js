const API_KEY = "539a98864b15b7d81ff3f8cabb042a1e";
const BASE_URL = "https://api.themoviedb.org/3";

export function fetchPopular() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then((r) => {
    if (!r.ok) {
      throw new Error("Something wrong");
    }
    return r.json();
  });
}
export function fetchMovie(keyWord) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${keyWord}&include_adult=false`
  ).then((r) => {
    if (!r.ok) {
      throw new Error("Something wrong");
    }
    return r.json();
  });
}
export function fetchDetails(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((r) => {
    if (!r.ok) {
      throw new Error("Something wrong");
    }
    return r.json();
  });
}
export function fetchCast(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then((r) => {
    if (!r.ok) {
      throw new Error("Something wrong");
    }
    return r.json();
  });
}
export function fetchReviews(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((r) => {
    if (!r.ok) {
      throw new Error("Something wrong");
    }
    return r.json();
  });
}
