import { NavLink, Outlet } from "react-router-dom";
import s from "./AppBar.module.css";

export default function AppBar() {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
