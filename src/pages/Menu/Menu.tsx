import Headlink from "../../components/Headlink/Headlink";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <>
      <div className={styles["head"]}>
        <Headlink>Mеню</Headlink>
        <Search   placeholder="Введите блюдо или состав" isValid={false} />
      </div>
    </>
  );
}
