import { Link } from "react-router-dom";

export default function NotFoundView() {
  return (
    <div>
      This page doesn't exist. Go <Link to="/">Home</Link>
    </div>
  );
}
