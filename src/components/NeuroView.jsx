import { Button } from "@mui/material";
import React from "react";

function NeuroView() {
  return (
    <div className="neuropageitem">
      <p>Получайте прогнозы по временным рядам. </p>
      <p>
        <p> Три простых шага для получения прогноза: </p>1. Загрузите ваши
        данные в формате csv, расположенные в один столбец без заголовка. После
        загрузки отправится на вашу почту прогноз.
        <p>2. Выберите горизонт прогнозирования (кол-во периодов)</p>
        <p>3. Нажмите кнопку "Получить прогноз"</p>
      </p>
      <div className="neuralinputs">
        <textarea placeholder="данные для прогнозирования"></textarea>
        <input type="text" placeholder="интервал прогнозирования" />
        <Button>Получить прогноз </Button>
      </div>
    </div>
  );
}

export default NeuroView;
