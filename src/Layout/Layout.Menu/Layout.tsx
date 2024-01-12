import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "../Layout.module.css";
import Button from "../../components/Button/Button";

import cn from "classnames";
import { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";
import { useDispatch } from "react-redux";

export function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
  };

  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img className={styles["avatar"]} src="/avatar.png" alt="" />
          <div className={styles["name"]}>Илья Овчарук</div>
          <div className={styles["email"]}>ilaovcaruk0@gmail.com</div>
        </div>

        <div className={styles["menu"]}>
          <NavLink
            to="menu"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/menu-icon.svg" alt="" />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/cart-icon.svg" alt="" />
            Корзина
          </NavLink>
        </div>

        <Button appearance={"big"} className={styles["exit"]} onClick={logout}>
          <img src="/exit.svg" alt="" />
          Выйти
        </Button>
      </div>
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
