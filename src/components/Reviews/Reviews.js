// import s from "./Reviews.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../utility/Api";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then((data) => {
      setReviewsData(data.results);
    });
  }, [movieId]);

  return (
    <article>
      <h3>Reviews</h3>
      {reviewsData.length !== 0 ? (
        <ul>
          {reviewsData.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Reviews not found!</p>
      )}
    </article>
  );
}
