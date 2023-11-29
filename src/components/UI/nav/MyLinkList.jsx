import React, { useState } from "react";
import classes from "./MyLinkList.module.css";
import MyLinkItem from "./MyLinkItem";
function MyLinkList() {
  let links = [
    { id: 1, tittle: "Меню", rf: "/" },
    { id: 2, tittle: "Нейросеть", rf: "neuro" },
    { id: 3, tittle: "Поддержка", rf: "help" },
    { id: 4, tittle: "Профиль", rf: "profile" },
  ];

  return (
    <ul className={classes.nav_list}>
      {links.map((link) => (
        <MyLinkItem tittle={link.tittle} key={link.id} rf={link.rf} />
      ))}
    </ul>
  );
}

export default MyLinkList;
