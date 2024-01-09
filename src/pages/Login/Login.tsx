import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headlink from "../../components/Headlink/Headlink";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent } from "react";



export function Login() {
    const submit = (e: FormEvent) => {
        e.preventDefault();
        console.log(e)
    }
  return (
    <div className={styles["login"]} onSubmit={submit}>
      <Headlink>Вход</Headlink>
      <form className={styles["form"]}>
        <div className={styles["field"]}>
          <label htmlFor="">Ваш email</label>
          <Input id="" placeholder="Email" isValid={false} />
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
        <Button appearance="big">Вход</Button>
      </form>

      <div>
        <div className={styles["links"]}>
          Нет акканута?
          <Link to={"/auth/register"}>Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
}
