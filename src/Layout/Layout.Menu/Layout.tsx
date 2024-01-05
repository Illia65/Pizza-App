import { Link, Outlet } from "react-router-dom";
import styles from "../Layout.module.css";
import Button from "../../components/Button/Button";

export function Layout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img className={styles['avatar']} src="/avatar.png" alt="" />
          <div className={styles["name"]}>Илья Овчарук</div>
          <div className={styles["email"]}>ilaovcaruk0@gmail.com</div>
        </div>

        <div className={styles["menu"]}>
          <Link to="menu" className={styles["link"]}>
            <img src="/menu-icon.svg" alt="" />
            Меню
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src="/cart-icon.svg" alt="" />
            Корзина
          </Link>
        </div>

        <Button appearance={"big"} className={styles["exit"]}>
          <img src="/exit.svg" alt="" />
          Выйти
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
