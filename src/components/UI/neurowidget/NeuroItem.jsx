import React from "react";
import cl from "./NeuroItem.module.css";
import { Button } from "@mui/material";
import { Link, Router } from "react-router-dom";

function NeuroItem() {
  return (
    <div className={cl.item}>
      <span className={cl.title}>Первая модель!</span>
      <span className={cl.title}>Здесь должно быть описание</span>
      <span className={cl.title}>Время добавления</span>
      <span>
        <Link to="/1">
          <Button>Нажми </Button>
        </Link>
      </span>
    </div>
  );
}

export default NeuroItem;
