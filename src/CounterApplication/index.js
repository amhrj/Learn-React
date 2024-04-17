import React from 'react';
import { useState } from 'react';


function CounterApplication() {

  const [count, setCount] = useState(0)
  

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1);
  }

  function reset(){
    setCount(0)
  }

  return (
    <div>
      <h1>Counter Application</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApplication;
