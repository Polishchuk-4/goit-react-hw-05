import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

export default function AppBar() {
  return (
    <header className={css.navigation}>
      <nav className={css.navigationContainer}>
        <NavLink to="/" className={css.navigationLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navigationLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
