import React from "react";
import cl from "./Register.module.css";
import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";
import { jwtDecode } from "jwt-decode";
import perm_axios from "../../api/tokens";

function Register({ setShow, ...props }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = async (data) => {
    let res = await axios.post("http://localhost:8000/api/v1/auth/login/", {
      username: data.username,
      password: data.password,
    });

    if (res.status === 200) {
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      localStorage.setItem("user", JSON.stringify(res.data.username));
      console.log(jwtDecode(res.data.access_token));

      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.login}>
      <div className={cl.headerlogin}>
        <span className={cl.title}> Регистрация</span>
      </div>
      <div className={cl.username_error}>
        {errors?.username && <p>{errors?.username?.message || "Error!"}</p>}
      </div>
      <input
        {...register("username", {
          required: "Требуется логин",
          minLength: {
            value: 6,
            message: "Длина поля не может быть меньше 5 символов",
          },
          maxLength: {
            value: 20,
            message: "Длина поля не может быть больше 20 символов",
          },
        })}
        type="text"
        autoComplete="username"
        placeholder="Имя пользователя"
      />
      <input
        {...register("password", {
          required: "Требуется пароль",
          maxLength: {
            value: 100,
            message: "Длина поля не может быть больше 100 символов",
          },
          minLength: {
            value: 2,
            message: "Длина пароля не может быть меньше 8 символов",
          },
        })}
        type="password"
        placeholder="Пароль"
      />
      <div className="password-error">
        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
      </div>
      <button type="submit"> войти</button>
    </form>
  );
}

export default Register;
