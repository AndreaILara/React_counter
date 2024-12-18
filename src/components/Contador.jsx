import React, { useState } from "react";
import "../App.scss"; 

function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    if (count < 16) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) setCount(count - 1);
  };

  const reiniciar = () => setCount(0);

  return (
    <div className="container">
      <h2>Valor del contador: {count}</h2>
      <div className="button-container">
        <button onClick={incrementar} className="button">
          Incrementar
        </button>
        <button onClick={decrementar} className="button">
          Decrementar
        </button>
        <button onClick={reiniciar} className="button">
          Reiniciar
        </button>
      </div>
      {count === 16 && <p className="maximo-alerta">¡Máximo alcanzado!</p>}
    </div>
  );
}

export default Contador;
