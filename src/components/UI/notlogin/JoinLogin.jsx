import React, { useState } from "react";
import classes from "./JoinLogin.module.css";
import LoginForm from "./LoginForm";
import Login from "../other/Login";

function JoinLogin() {
  const [showForm, setShow] = useState(false);
  const showLoginForm = (e) => {
    setShow(!showForm);
    console.log(showForm);
  };

  return (
    <div className={classes.unauth}>
      <p className={classes.plslog}>
        Вы являетесь гостем. Пожалуйста,{" "}
        <span onClick={showLoginForm} className={classes.linktologin}>
          {" "}
          войдите в систему
        </span>{" "}
        или запросите логин и пароль у администратора
      </p>
      <LoginForm visible={showForm} setVisible={setShow}>
        {" "}
        <Login />{" "}
      </LoginForm>
    </div>
  );
}

export default JoinLogin;
