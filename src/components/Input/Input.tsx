import { forwardRef } from "react";
// import styles from "./Search.module.css";
import styles from "./Input.module.css"
import cn from "classnames";
import { SearchProps } from "../Search/Search.props";


const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  { isValid = true, className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(styles.input, className, {
        [styles.invalid]: isValid,
      })}
      {...props}
    />
  );
});

export default Search;
