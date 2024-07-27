import toast from "react-hot-toast";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.input.value;
    if (inputValue.trim() === "") {
      toast("Please, input else value.", {
        icon: "ℹ️",
      });
      return;
    }
    onSubmit(inputValue);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.searchFormInput}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
        />
        <button className={css.searchFormBtn} type="submit">
          Search
        </button>
      </form>
    </>
  );
}
