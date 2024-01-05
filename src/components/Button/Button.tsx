import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

function Button({
  children,
  className,
  appearance = "small",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, styles.accent, className, {
        [styles.small]: appearance === "small", // исправлено с = на ===
        [styles.big]: appearance === "big", // исправлено с = на ===
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
