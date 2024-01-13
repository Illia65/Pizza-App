import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headlink from "../../components/Headlink/Headlink";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { login, userActions } from "../../store/user.slice";
import { RootState } from "../../store/store";

export type LoginForm = {
  email: {
    value: string;
  };

  password: {
    value: string;
  };
};

export function Login() {
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const jwt = useSelector((s: RootState) => s.user.jwt);

  useEffect(() => {
    if (jwt) {
      navigate("/menu");
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
   dispatch(userActions.clearLoginError())
   
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sentLogin(email.value, password.value);
  };
  const sentLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
    // setError();
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
          Нет акаунта?
          <Link to={"/auth/register"}>Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
}
