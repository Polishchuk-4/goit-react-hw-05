import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

export default function NotFound() {
  return (
    <div className={css.notFound}>
      Sorry, we have a problem
      <Link className={css.link} to={"/"}>
        MAIN PAGE
      </Link>
    </div>
  );
}
