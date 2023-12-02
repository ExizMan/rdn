import React, { useState } from "react";
import classes from "./JoinLogin.module.css";
import LoginForm from "./LoginForm";
import Login from "../other/Login";
import Register from "../other/Register";

function JoinLogin() {
  const [showForm, setShow] = useState(false);
  const [showRegister, setRegister] = useState(false);
  const showLoginForm = (e) => {
    setShow(!showForm);
    console.log(showForm);
  };
  const showRegForm = (e) => {
    setRegister(!showRegister);
    console.log(showRegister);
  };

  return (
    <div className={classes.unauth}>
      <p className={classes.plslog}>
        Вы являетесь гостем. Пожалуйста,{" "}
        <span onClick={showLoginForm} className={classes.linktologin}>
          {" "}
          войдите в систему
        </span>{" "}
        или{" "}
        <span onClick={showRegForm} className={classes.linktologin}>
          {" "}
          зарегистрируйтесь
        </span>{" "}
      </p>
      <LoginForm visible={showForm} setVisible={setShow}>
        {" "}
        <Login setShow={setShow} />
      </LoginForm>
      <LoginForm visible={showRegister} setVisible={setRegister}>
        <Register setShow={setRegister} />
      </LoginForm>
    </div>
  );
}

export default JoinLogin;
