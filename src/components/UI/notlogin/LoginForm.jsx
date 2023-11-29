import React from "react";
import classes from "./JoinLogin.module.css";

function LoginForm({ children, visible, setVisible }) {
  const arrDispleyClasses = [classes.loginform];
  const arrModalClasses = [classes.logincontent];
  if (visible) {
    arrDispleyClasses.push(classes.active);
    arrModalClasses.push(classes.active);
  }
  return (
    <div
      className={arrDispleyClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={arrModalClasses.join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        {children}{" "}
      </div>
    </div>
  );
}

export default LoginForm;
