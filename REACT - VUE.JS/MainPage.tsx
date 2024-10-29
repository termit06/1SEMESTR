
import React, { useState } from 'react';

const App = () => {
  
  const [number, setNumber] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const subtractTwo = (value: number) => {
    setNumber((prev) => prev - value);
    setIsHighlighted(false); // Сбрасываем выделение при каждом изменении числа
  };

  const checkDivisibility = () => {
    if (number % 3 === 0) {
      setIsHighlighted(true);
    } else {
      setIsHighlighted(false);
    }
  };

  return (
    <div>
    <div> Начальная сумма 0, при нажатие кнопки отнимает число, если число делится на 3 то меняй красный цвет на зелённый!</div>
      {number % 3 == 0 ? 
        <h1 style={{
          color: 'green'
        }}>{number}</h1>
        :
        <h1 style={{
          color: 'red'
        }}>{number}</h1>
      }
      <h1>
        {number}
      </h1>
      <button style={{ background: 'blue', fontSize: 50 }}onClick={() => subtractTwo(2)}>-2</button>
      <button style={{ background: 'purple', fontSize: 50 }}onClick={() => subtractTwo(4)}>-4</button>
      <button style={{ background: 'red', fontSize: 50 }}onClick={() => subtractTwo(6)}>-6</button>
      <button style={{ background: 'green', fontSize: 70 }}onClick={checkDivisibility}>/3</button>
    </div>
  );
};

export default App;
