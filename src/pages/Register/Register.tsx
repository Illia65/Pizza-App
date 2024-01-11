import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headlink from "../../components/Headlink/Headlink";
import Input from "../../components/Search/Search";
import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles["registr"]}>
      <Headlink>Регистрация</Headlink>
      <form className={styles["form"]}>
        <div className={styles["field"]}>
          <label htmlFor="">Ваш email</label>
          <Input placeholder="Email" isValid={false} />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="">Ваш пароль</label>
          <Input
            placeholder="Пароль"
            id="password"
            type="password"
            isValid={false}
          />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="">Ваше имя</label>
          <Input placeholder="Имя" isValid={false} />
        </div>
      </form>
      <Button appearance="big">Зарегистрироваться</Button>

      <div>
        <div className={styles['links']}>
          Есть акаунт?
          <Link to={"/auth/login"}>Войти</Link>
        </div>
      </div>
    </div>
  );
}
