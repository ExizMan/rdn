import React from "react";
import MyInput from "./UI/input/MyInput";
import NeuroItem from "./UI/neurowidget/NeuroItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Neuro() {
  return (
    <div className="neuropage">
      {" "}
      <div className="contentneuro">
        <span className="searchneuro">Поиск</span>
        <MyInput />
        <section className="neurosect">
          <NeuroItem />
        </section>
      </div>
    </div>
  );
}

export default Neuro;
