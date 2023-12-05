import React, { useState } from "react";
import cl from "./Register.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Otp from "./Otp";
import OTPInput from "react-otp-input";
function Register({ setShow, ...props }) {
  const [serverErr, setServError] = useState({});
  const [serverData, setServData] = useState({
    email: "1",
    username: "1",
    password: "9",
    password2: "3",
  });
  const [showOtpForm, setOtpForm] = useState(false);
  const [otp, setOtp] = useState("");

  const createUser = async (data) => {
    try {
      let res = await axios.post(
        "http://localhost:8000/api/v1/auth/register/create",
        {
          email: data.email,
          username: data.username,
          password: data.password,
          password2: data.password2,
        },
      );
      console.log(res);
      if (res.status === 201) {
        console.log("succes");
        setShow(false);
      }
    } catch (e) {}
  };

  const sendOtp = async () => {
    try {
      let res = await axios.post(
        "http://localhost:8000/api/v1/auth/register/confirm",
        {
          email: serverData.email,
          otp: otp,
        },
      );
      console.log(res);
      if (res.status === 200) {
        createUser(serverData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      setServData({
        email: data.email,
        username: data.username,
        password: data.password,
        password2: data.password2,
      });
      let res = await axios.post(
        "http://localhost:8000/api/v1/auth/register/",
        {
          email: data.email,
          username: data.username,
          password: data.password,
          password2: data.password2,
        },
      );
      console.log(res);
      if (res.status === 200) {
        console.log(res);

        console.log(serverErr);

        console.log(serverData);
        setOtpForm(true);
      }
    } catch (e) {
      if (e.response?.status === 400) setServError(e.response.data);
      else console.log(e);
    }
  };

  return (
    <div className={cl.loginpouter}>
      <form
        className={cl.login}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className={cl.headerlogin}>
          <span className={cl.title}> Регистрация</span>
        </div>
        <div className={cl.username_error}>
          {errors?.username && <p>{errors?.username?.message || "Error!"}</p>}
        </div>
        {errors.root && <p>server response message</p>}
        {serverErr?.email}
        <input
          {...register("email", {
            required: "Поле обязательно для заполнения",
            maxLength: {
              value: 100,
              message: "Длина поля не может быть больше 100 символов",
            },

            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Почта заполнена неверно",
            },
          })}
          type="email"
          autoComplete="email"
          placeholder="Электронная почта"
        />
        {serverErr?.username}
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
          placeholder="Имя пользователя"
        />
        {serverErr?.password}
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
        {serverErr?.password2}
        <input
          {...register("password2", {
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
          placeholder="Повторите пароль"
        />
        <div className="password-error">
          {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
        </div>
        <button type="submit"> войти</button>
      </form>
      {/* <form
        className={showOtpForm ? `${cl.otp} + ${cl.active}` : cl.otp}
        onSubmit={someFun}
      > */}
      <div className={showOtpForm ? `${cl.otp} + ${cl.active}` : cl.otp}>
        <p>Вам на почту пришел код</p>
        <p>Введите его, пожалуйста :3</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <button onClick={sendOtp}></button>

        {/* </form> */}
      </div>
    </div>
  );
}

export default Register;
