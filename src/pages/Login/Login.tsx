import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headlink from "../../components/Headlink/Headlink";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../helpers/API";

export type LoginForm = {
  email: {
    value: string;
  };

  password: {
    value: string;
  };
};

export function Login() {
  const [error, setError] = useState <string | null>();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
  setError(null)
    console.log(e);
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    // console.log(password.value);
    // console.log(email.value);
    await sentLogin(email.value, password.value);
  };
  const sentLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`${PREFIX}/auth/login`, {
        email,
        password,
      });
      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e);
        setError(e.response?.data.message);
      }
    }
  };
  return (
    <div className={styles["login"]}>
      <Headlink>Вход</Headlink>{" "}
      {error && <div className={styles["error"]}>{error}</div>}
      <form className={styles["form"]} onSubmit={submit}>
        <div className={styles["field"]}>
          <label htmlFor="">Ваш email</label>
          <Input id="email" name="email" placeholder="Email" isValid={false} />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="">Ваш пароль</label>
          <Input
            placeholder="Пароль"
            id="password"
            type="password"
            name="password"
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